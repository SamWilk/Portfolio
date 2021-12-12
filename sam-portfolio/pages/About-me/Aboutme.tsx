/* eslint-disable @next/next/no-page-custom-font */
import styles from "../About-me/Aboutme.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Education from "../../component/Education/Education";
import Work from "../../component/Work/Work";
import { PrismaClient } from ".prisma/client";
import NotDone from "../../component/notDone/NotDone";
import ContactInfo from "../../component/ContactInfo/ContactInfo";
import AboutSite from "../../component/AboutSite/AboutSite";
import type { NextPage } from "next";

// import "rxjs/add/operator/map";

const prisma = new PrismaClient();

export async function getStaticProps() {
  const schools = await prisma.school.findMany();
  const clubs = await prisma.clubs.findFirst({ where: { id: 1 } });
  const work = await prisma.work.findMany();
  const contactInfo = await prisma.contactInfo.findFirst();

  return { props: { schools, clubs, work, contactInfo } };
}

//Then here do props: { schools: any, clubs: any}
const Aboutme: NextPage<any> = (props: any) => {
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
          href={
            "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          }
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
                onClick={() => handleChange(false, false, false, true)}
              >
                Contact
              </a>
            </Link>
            <Link href="/About-me/Aboutme">
              <a
                className={styles.links}
                onClick={() => handleChange(false, false, true, false)}
              >
                About This Site
              </a>
            </Link>
          </div>
        </div>
        <div id="content" className={styles.content}>
          {edu && <Education {...props} />}
          {work && <Work {...props} />}
          {res && <AboutSite />}
          {contact && <ContactInfo {...props} />}
        </div>
      </div>
    </>
  );
};

export default Aboutme;
