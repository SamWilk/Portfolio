import styles from "../Work/Work.module.css";
import Head from "next/head";

const Work = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.content}>Work</div>
    </>
  );
};

export default Work;
