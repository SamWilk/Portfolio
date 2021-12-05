import styles from "../navbar/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.back}>
        <div className={styles.bar}>
          <div className={styles.logo}>logo</div>
          <Link href="/">
            <a className={styles.each}>Home</a>
          </Link>
          <Link href="/Searching-algo/searchingList">
            {/* http://search-page-static-sam.s3-website.us-east-2.amazonaws.com/ */}
            <a className={styles.each}>Searching Algorithms</a>
          </Link>
          <Link href="/About-me/Aboutme">
            <a className={styles.each}>About me</a>
          </Link>
          <Link href="https://github.com/SamWilk">
            <a className={styles.each} target="_blank">
              GitHub
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
