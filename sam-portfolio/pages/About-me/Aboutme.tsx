import styles from "../About-me/Aboutme.module.css";
import Head from "next/head";
import Link from "next/link";

const Aboutme = () => {
  function showEducation() {}

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.back}>
          <div className={styles.bar}>
            <Link href="/About-me/Aboutme">
              <a className={styles.links} onClick={() => showEducation()}>
                Education
              </a>
            </Link>
            <Link href="/About-me/Aboutme">
              <a className={styles.links}>Work</a>
            </Link>
            <Link href="/About-me/Aboutme">
              <a className={styles.links}>Resume</a>
            </Link>
            <Link href="/About-me/Aboutme">
              <a className={styles.links}>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
