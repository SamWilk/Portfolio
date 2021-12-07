import styles from "../About-me/Aboutme.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Education from "../../component/Education/Education";

const Aboutme = () => {
  function showEducation(val: boolean) {
    setEdu(val);
  }
  function showWork(val: boolean) {
    setWork(val);
  }
  function showRes(val: boolean) {
    setRes(val);
  }
  function showContact(val: boolean) {
    setContact(val);
  }
  const [edu, setEdu] = useState<boolean>(false);
  const [work, setWork] = useState<boolean>(false);
  const [res, setRes] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);

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
              <a className={styles.links} onClick={() => showEducation(!edu)}>
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
        <div id="content" className={styles.content}>
          {edu && <Education />}
        </div>
      </div>
    </>
  );
};

export default Aboutme;
