import styles from "../Education/Education.module.css";
import Head from "next/head";

const Education = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>Education</div>
    </>
  );
};

export default Education;
