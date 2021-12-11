/* eslint-disable @next/next/no-page-custom-font */
import styles from "../Education/Education.module.css";
import Head from "next/head";
import Link from "next/link";

const Education = (props: { schools?: any; clubs?: any }) => {
  const { schools } = props;
  const { clubs } = props;
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.box1}>Education</h1>
          {schools.map((items: typeof schools, index: number) => (
            <div key={items.id} className={styles.box}>
              {items.name}
              <div className={styles.list}>
                <div key={items.name} className={styles.each}>
                  Major: {items.major}
                  <div key={items.name} className={styles.each}>
                    Degree: {items.degree}
                  </div>
                  <div key={index} className={styles.each}>
                    Graduation date: {items.grad}
                  </div>
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
                <div key={clubs.id} className={styles.each}>
                  Joined: {clubs.dateJoined}
                  <div key={clubs.id} className={styles.each}>
                    Position: {clubs.position}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.clubDiscrip}>
            <div className={styles.discripTitle}>Description:</div>
            Osprey Competitive Programming has taught me how to work with a
            group on individuals as a team. It has brought up a number of great
            discussions from trying to understand complex, multi-faceted level
            questions to coming together as a group to discussion and understand
            each others approach to different issues.
          </div>
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
