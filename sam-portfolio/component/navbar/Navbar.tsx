/* eslint-disable @next/next/no-page-custom-font */
import styles from "../navbar/Navbar.module.css";
import Link from "next/link";
import Head from "next/head";

const Navbar = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.back}>
        <div className={styles.bar}>
          {/* <div className={styles.logo}>logo</div> */}
          <Link href="/">
            <a className={styles.each}>Home</a>
          </Link>
          <Link href="/Projects/projects">
            {/* http://search-page-static-sam.s3-website.us-east-2.amazonaws.com/ */}
            <a className={styles.each}>Projects</a>
          </Link>
          <Link href="/About-me/Aboutme">
            <a className={styles.each}>About Me</a>
          </Link>
          <Link href="https://github.com/SamWilk">
            <a className={styles.each} target="_blank">
              GitHub
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/sam-wilk-a66314210/">
            <a className={styles.each} target="_blank">
              Linkedin
            </a>
          </Link>
          {/* <Link href="/Makenna/makennaPage">
            <a className={styles.each} target="_blank">
              Shrimpy
            </a>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
