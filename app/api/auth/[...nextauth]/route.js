import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongoDB from '@/libs/mongodb';
import Users from '@/models/user';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    GoogleProvider({
      name: 'Google',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
      authorization: {
        params: {
          prompt: 'consent',
          response_type: 'code',
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET_ID,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
        rememberMe: { label: 'Remember Me', type: 'checkbox' }
      },
      async authorize(credentials) {
        try {
          await connectMongoDB(); // Connect to MongoDB

          const { email, password, rememberMe } = credentials;

          // Find the user by email
          const user = await Users.findOne({ email });

          if (!user) {
            throw new Error('User not found. Please sign up.');
          }

          // Check if the password matches (assuming passwords are hashed)
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            throw new Error('Invalid credentials.');
          }

          // Return the user object if everything is okay
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.username,
            image: user.profilephoto,
            rememberMe: rememberMe === 'on', // Convert checkbox value to boolean
          };
        } catch (error) {
          console.error('Authorization error:', error);
          return null; // Deny sign-in
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // Default session expiration of 24 hours
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectMongoDB(); // Connect to MongoDB

        const { email, name, image, rememberMe } = user;
        const { provider } = account;

        const userData = {
          email,
          username: name || '',
          profilephoto: image || '',
          provider,
          created_at: new Date(),
          updated_at: new Date(),
        };

        if (provider === 'google') {
          userData.googleid = account.providerAccountId;
        } else if (provider === 'github') {
          userData.githubid = account.providerAccountId;
        } else if (provider === 'facebook') {
          userData.facebookid = account.providerAccountId;
        }

        const existingUser = await Users.findOne({ email });
        if (!existingUser) {
          await Users.create(userData);
        } else {
          await Users.updateOne(
            { email },
            {
              $set: {
                ...userData,
                updated_at: new Date(),
              },
            }
          );
        }

        return true;
      } catch (error) {
        console.error('Error saving user to MongoDB:', error);
        return false; // Deny the sign-in
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // Extend token expiration if "Remember Me" is selected
        if (user.rememberMe) {
          token.exp = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60; // 30 days
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
