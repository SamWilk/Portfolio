/* eslint-disable @next/next/no-page-custom-font */
import styles from "../Projects/projects.module.css";
import Head from "next/head";
import NotDone from "../../component/notDone/NotDone";

const searchingList = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <NotDone />
      </div>
    </>
  );
};

export default searchingList;
