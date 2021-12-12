/* eslint-disable @next/next/no-page-custom-font */
import styles from "../notDone/NotDone.module.css";
import Head from "next/head";

const NotDone = () => {
  return (
    <>
      <Head>
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          }
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.litteBox}>Whoops!</h1>
          <div className={styles.litteBox2}></div>
          <h3>Still working on this one! Will hopefully be done soon!</h3>
        </div>
      </div>
    </>
  );
};

export default NotDone;
