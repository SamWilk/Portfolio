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
  //Create a table for clubs and use the schools.name to check for the club table
  //const clubs = await prisma.clubs.findUnique({where: {schools.name: name}}), meaning get the clubs where the schools
  //is the same
  //On return statement do return { props: { schools, clubs }}, this will return multiple props
  return { props: { schools } };
}

//Then here do props: { schools: any, clubs: any}
const Aboutme = (props: { schools: any }) => {
  const { schools } = props;

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
            <Link href="/About-me/Aboutme">
              <a
                className={styles.links}
                onClick={() => handleChange(false, false, true, false)}
              >
                Resume
              </a>
            </Link>
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
          {work && <Work />}
        </div>
      </div>
    </>
  );
};

export default Aboutme;
