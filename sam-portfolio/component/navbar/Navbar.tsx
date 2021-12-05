import styles from "../navbar/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.logo}>logo</div>
        <div className={styles.links}>
          <Link href="/">
            <a className={styles.each}>Home</a>
          </Link>
          <Link href="/Searching-algo/searchingList">
            {/* http://search-page-static-sam.s3-website.us-east-2.amazonaws.com/ */}
            <a className={styles.each}>Searching Algorithms</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
