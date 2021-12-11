/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../component/navbar/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "../component/footer/Footer";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const schools = await prisma.school.findFirst({
    where: { name: "University of North Florida" },
  });

  return { props: { schools } };
}

const Home: NextPage<any> = (props: { schools: any }) => {
  const { schools } = props;
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
            rel="stylesheet"
          />
          <title>Sam Wilk Portfolio</title>
          <meta name="description" content="Created By Sam Wilk" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.boxTitle}>
            <h1 className={styles.title}>Sam Wilk</h1>
            <h3 className={styles.describe}>
              Computer Science Student |
              <Link href="https://www.unf.edu/">
                <a target="_blank" className={styles.school}>
                  {" "}
                  {schools.name}
                </a>
              </Link>
            </h3>
            <h3 className={styles.describe1}>Front End Developer</h3>
          </div>
          <div className={styles.box}>
            <div className={styles.pic}>
              <Image src="/Me.jpeg" width={400} height={400} alt="Sam Wilk" />
            </div>
            <div></div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
