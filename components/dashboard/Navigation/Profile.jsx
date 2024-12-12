import React, { useContext } from "react";
import Image from "next/image";
import styles from "./Profile.module.css";
import profileImage from "@/public/images/profile.png";
import Help from "@/public/svg/dashboard/navbar/Help";
import Link from "next/link";
import { RiLogoutBoxLine } from "react-icons/ri";
import MyContext from "@/store/context/MyContext";
import { usePathname } from "next/navigation";
import { signIn, signOut } from "next-auth/react";

const Profile = (props) => {
  const pathname = usePathname();
  const context = useContext(MyContext);

  const closeDashboard = () => {
    context.toggleDashboard();
  };

  console.log(props)

  return (
    <div className={styles.profile}>
      <h4>ACCOUNT PAGES</h4>
      <ul className={styles.profileNavList}>
        <Link href={"/dashboard/profile"} onClick={closeDashboard}>
          <li
            className={pathname === "/dashboard/profile" ? styles.active : ""}
          >
            <Image src={props.user.image} width={200} height={200} alt="profile" />
            {props.user.name}
          </li>
        </Link>
        <Link href={"#"} onClick={() => signOut()}>
          <li>
            <div className={styles.logoutIcon}>
              <RiLogoutBoxLine />
            </div>
            Logout
          </li>
        </Link>
      </ul>
      <div className={styles.helpContainer}>
        {!props.isMobileView && (
          <div className={styles.helpIcon}>
            <Help />
          </div>
        )}
        <div>
          <h3>Need help?</h3>
          <p>Please check our docs</p>
          <Link href={"#"}>
            <button>DOCUMENTATION</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
