/* eslint-disable @next/next/no-page-custom-font */
import styles from "../About-me/Aboutme.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Education from "../../component/Education/Education";
import Work from "../../component/Work/Work";
import { PrismaClient } from ".prisma/client";
// import "rxjs/add/operator/map";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const schools = await prisma.school.findMany();
  const clubs = await prisma.clubs.findFirst({ where: { id: 1 } });
  const work = await prisma.work.findMany();

  return { props: { schools, clubs, work } };
}

//Then here do props: { schools: any, clubs: any}
const Aboutme = (props: any) => {
  function handleChange(
    edu: boolean,
    work: boolean,
    res: boolean,
    contact: boolean
  ) {
    setEdu(edu);
    setWork(work);
    setRes(res);
    setContact(contact);
  }
  const [edu, setEdu] = useState<boolean>(true);
  const [work, setWork] = useState<boolean>(false);
  const [res, setRes] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.back}>
          <div className={styles.bar}>
            <Link href="/About-me/Aboutme">
              <a
                className={styles.links}
                onClick={() => handleChange(true, false, false, false)}
              >
                Education
              </a>
            </Link>
            <Link href="/About-me/Aboutme">
              <a
                className={styles.links}
                onClick={() => handleChange(false, true, false, false)}
              >
                Work
              </a>
            </Link>
            {/* <Link href="/About-me/Aboutme">
              <a
                className={styles.links}
                onClick={() => handleChange(false, false, true, false)}
              >
                Resume
              </a>
            </Link> */}
            <Link href="/About-me/Aboutme">
              <a
                className={styles.links}
                onClick={() => handleChange(false, false, false, true)}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
        <div id="content" className={styles.content}>
          {edu && <Education {...props} />}
          {work && <Work {...props} />}
        </div>
      </div>
    </>
  );
};

export default Aboutme;
