/* eslint-disable @next/next/no-page-custom-font */
import styles from "../Education/Education.module.css";
import Head from "next/head";

const Education = (props: { schools: any }) => {
  const { schools } = props;
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.box1}>Schools</h1>
          {schools.map((items: any) => (
            <div key={items.id} className={styles.box}>
              {items.name}
              <div className={styles.list}>
                <div key={items.id} className={styles.each}>
                  Major: {items.major}
                </div>
                <div key={items.id} className={styles.each}>
                  Degree: {items.degree}
                </div>
                <div key={items.id} className={styles.each}>
                  Graduation date: {items.grad}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
