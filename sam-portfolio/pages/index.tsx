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
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap"
            rel="stylesheet"
          />
          <title>Sam Wilk Portfolio</title>
          <meta name="description" content="Created By Sam Wilk" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Sam Wilk</h1>
          <h3 className={styles.describe}>
            Computer Science Student |
            <Link href="https://www.unf.edu/">
              <a target="_blank"> {schools.name}</a>
            </Link>
          </h3>
          <h3 className={styles.describe1}>Front End Developer</h3>
        </main>
        <div className={styles.Photo}>
          <Image
            src="/Jax.jpeg"
            width={1140}
            height={800}
            layout="fill"
            alt="Jax SkyLine"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
