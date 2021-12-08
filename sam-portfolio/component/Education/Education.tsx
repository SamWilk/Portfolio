/* eslint-disable @next/next/no-page-custom-font */
import styles from "../Education/Education.module.css";
import Head from "next/head";
import Link from "next/link";

const Education = (props: any) => {
  const { schools } = props;
  const { clubs } = props;
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
          <h1 className={styles.box1}>Education</h1>
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
        <div className={styles.content}>
          <h1 className={styles.box1}>
            <a>Clubs</a>
          </h1>
          <div key={clubs.id} className={styles.box}>
            {clubs.name}
            <div className={styles.list}>
              <div key={clubs.id} className={styles.each}>
                Club: {clubs.clubName}
              </div>
              <div key={clubs.id} className={styles.each}>
                Joined: {clubs.dateJoined}
              </div>
              <div key={clubs.id} className={styles.each}>
                Position: {clubs.position}
              </div>
            </div>
          </div>
          <div>Decription</div>
        </div>
        {/* {clubs.map((items: any) => (
          <div key={items.id} className={styles.box}>
            {items.name}
            <div className={styles.list}>
              <div key={items.id} className={styles.each}>
                Club: {items.clubName}
              </div>
              <div key={items.id} className={styles.each}>
                Joined: {items.dateJoined}
              </div>
              <div key={items.id} className={styles.each}>
                Position: {items.position}
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Education;
