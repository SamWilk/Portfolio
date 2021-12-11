/* eslint-disable @next/next/no-page-custom-font */
import styles from "../Work/Work.module.css";
import Head from "next/head";
import { timestamp } from "rxjs-compat/operator/timestamp";
import Link from "next/link";

const Work = (props: { work?: any }) => {
  const { work } = props;
  const website = new Array(work.length);
  // const website = work.website;
  for (let i = 0; i < work.length; i++) {
    website[i] = work[i].website;
    if (website[i] == "") {
      work[i].website = "/About-me/Aboutme";
    }
  }
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
          <h1 className={styles.box1}>Work Experience</h1>
          <div className={styles.box2}>
            {work.map((items: typeof work, index: number) => (
              <div key={items.workPlace}>
                <div key={items.workPlace} className={styles.values}>
                  Company:{" "}
                  <Link href={items.website}>
                    <a className={styles.link} target="_blank">
                      {items.workPlace}
                    </a>
                  </Link>
                  <span key={items.position}>, {items.position}</span>
                  <div key={items.responsiblity} className={styles.resp}>
                    {items.responsiblity}
                  </div>
                  <div className={styles.miniBox}>
                    <div key={items.workPlace} className={styles.values}>
                      Hire Date: {items.hireDate}
                      &emsp; Leave Date: {items.leaveDate}
                    </div>
                  </div>
                  {/* <div key={index}></div> */}
                </div>
              </div>
            ))}
            {/* <div className={styles.values}>Values</div>
            <div> fdaf</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
