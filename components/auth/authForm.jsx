"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./authForm.module.css";
import InputField from "../ui/authentication/InputField";
import Google from "@/public/svg/auth/google";
import GitHub from "@/public/svg/auth/github";
import { signIn } from "next-auth/react";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(""); // State to store error messages
  const [showSuggestions, setShowSuggestions] = useState(false); // State to handle suggestions
  const [storedEmails, setStoredEmails] = useState([]); // State to store multiple emails
  const searchParams = useSearchParams(); // Initialize searchParams

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef=useRef(null);

  useEffect(() => {
    // Get stored emails from localStorage
    const emails = JSON.parse(localStorage.getItem('emails')) || [];
    setStoredEmails(emails);

    // Set initial email and password from localStorage if available
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const rememberMe = JSON.parse(localStorage.getItem('rememberMe')) || false; // Restore rememberMe state

    if (storedEmail && emailRef.current) {
      emailRef.current.value = storedEmail;
      setIsChecked(rememberMe); // Set the rememberMe checkbox based on stored state
    }
    if (storedPassword && passwordRef.current) {
      passwordRef.current.value = storedPassword;
    }

    // Also set email and password from the URL query parameters if available
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    if (email && emailRef.current) {
      emailRef.current.value = email;
    }
    if (password && passwordRef.current) {
      passwordRef.current.value = password;
    }
  }, [searchParams]);

  const toggleFormHandler = () => {
    setIsSignup(!isSignup);
    setIsChecked(false);
    if (isSignup && nameRef.current) {
      nameRef.current.value = "";
    }
    if (emailRef.current) {
      emailRef.current.value = "";
    }
    if (passwordRef.current) {
      passwordRef.current.value = "";
    }
    if (isSignup && confirmPasswordRef.current) {
      confirmPasswordRef.current.value = "";
    }
    setError(""); // Clear error on form switch
    setShowSuggestions(false); // Hide suggestions when form is toggled
  };

  const toggleCheckHandler = () => {
    setIsChecked((prev) => !prev);
  };

  const handleEmailClick = () => {
    setShowSuggestions(true);
  };

  const handleEmailChange = (e) => {
    // Prevent showing suggestions while typing
    if (!showSuggestions) {
      e.preventDefault();
    }
  };

  const handleSuggestionClick = (email) => {
    if (emailRef.current) {
      emailRef.current.value = email;
    }
    setShowSuggestions(false); // Hide suggestions after selection
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  
    const email = emailRef.current ? emailRef.current.value : "";
    const password = passwordRef.current ? passwordRef.current.value : "";
    const confirmPassword = confirmPasswordRef.current ? confirmPasswordRef.current.value : "";
  
    if (isSignup) {
      const name = nameRef.current ? nameRef.current.value : "";
      const termsAgreed = isChecked;
  
      // Basic validation
      if (!name || !email || !password) {
        setError('All fields are required.');
        return;
      }
      if(password !== confirmPassword){
        setError('Passwords do not match');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('Invalid email format.');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }
      if (!termsAgreed) {
        setError("You must agree to the terms and conditions.");
        return;
      }
  
      // Make the POST request to the signup endpoint
      try {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password, termsAgreed }),
        });
        const data = await response.json();
        if (data.success) {
          console.log("Signup successful");
          setError("");
          // Redirect to the dashboard or trigger a sign-in
          signIn("credentials", { email, password });
        } else {
          setError(data.message || "Signup failed.");
        }
      } catch (error) {
        console.error("Error during signup:", error);
        setError("An error occurred. Please try again.");
      }
    } else {
      const rememberMe = isChecked;
      console.log(email, password, rememberMe);
  
      // Make the POST request to sign in the user
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
  
      if (result.error) {
        if (result.error.includes('User not found')) {
          setError('User not found. Please sign up.');
        } else {
          setError('Invalid credentials.');
        }
      } else {
        console.log("Successfully signed in");
        setError("");
        // Save email and password to localStorage if "Remember Me" is checked
        let emails = JSON.parse(localStorage.getItem('emails')) || [];
        if (rememberMe) {
          // Add email to local storage only if it is not already there
          if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('emails', JSON.stringify(emails));
          }
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('rememberMe', JSON.stringify(rememberMe)); // Save rememberMe state
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          localStorage.removeItem('rememberMe');
        }
        // Redirect to the dashboard or another secure page
        window.location.href = '/dashboard';
      }
    }
  };
  
  
  const signInText = (
    <p>
      Don't have an account yet?{" "}
      <span className={styles.orangeText} onClick={toggleFormHandler}>
        Sign Up
      </span>
    </p>
  );

  const signUpText = (
    <p>
      Already have an account?{" "}
      <span className={styles.orangeText} onClick={toggleFormHandler}>
        Sign In
      </span>
    </p>
  );

  return (
    <>
      <h1 className={styles.welcomeMessage}>Welcome to Our Platform!</h1>
      
      <form className={styles.authForm} onSubmit={submitHandler}>
        <h3>{isSignup ? "Register with" : "Sign In"}</h3>
        <div className={styles.logo}>
          {/* <Link href={"#"} onClick={() => signIn("facebook")}><Facebook /></Link> */}
          <Link href={"#"} onClick={() => signIn("google")}><Google /></Link>
          <Link href={"#"} onClick={() => signIn("github")}><GitHub /></Link>
        </div>
        <p id={styles.orBlue}>or</p>
        <div className={styles.inputFields}>
          {isSignup && (
            <div className={styles.inputBlock}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <InputField type={"text"} placeholder={"Your name"} ref={nameRef} />
            </div>
          )}
          <div className={styles.inputBlock}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <InputField
              type={"email"}
              placeholder={"Email address"}
              ref={emailRef}
              className={styles.inputFieldBox}
            />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <InputField
              type={"password"}
              placeholder={"Password"}
              ref={passwordRef}
              className={styles.inputFieldBox}
            />
          </div>
          <div className={styles.inputFields}>
          {isSignup && (
            <div className={styles.inputBlock}>
              <label htmlFor="confirm Password" className={styles.label}>Password</label>
              <InputField type={"confirmpassword"} placeholder={"confirm password"} ref={confirmPasswordRef}  className={styles.inputFieldBox} 
              />
            </div>
          )}
          </div>
          <div className={styles.additionalControl}>
            <div className={styles.rememberMe}>
              <label className={styles.switch}>
                <input type="checkbox" checked={isChecked} onChange={toggleCheckHandler} />
                <span className={`${styles.round} ${styles.slider}`}></span>
              </label>
              {isSignup ? (
                <p className={styles.privacyPolicy} onClick={toggleCheckHandler}>
                  I agree with{" "}
                  <span className="text-black font-semibold">Privacy Policy</span>{" "}
                  and{" "}
                  <span className="text-black font-semibold">Terms of Use</span>
                </p>
              ) : (
                <p onClick={toggleCheckHandler}>Remember me</p>
              )}
            </div>
          </div>
        </div>
        <button
          disabled={isSignup && !isChecked}
          className={`${styles.authFormButton} ${isSignup && !isChecked ? styles.disabledButton : ''}`}
        >
          {isSignup ? <p>SIGN UP</p> : <p>SIGN IN</p>}
        </button>
        {error && <p className={styles.error}>{error}</p>} {/* Display error message */}
        {isSignup ? signUpText : signInText}
      </form>
    </>
  );
};

export default AuthForm;
