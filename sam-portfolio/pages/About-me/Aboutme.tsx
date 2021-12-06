import styles from "../About-me/Aboutme.module.css";
import Head from "next/head";

const Aboutme = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>About me...</div>
    </>
  );
};

export default Aboutme;
