/* eslint-disable @next/next/no-page-custom-font */
import styles from "../Projects/projects.module.css";
import Head from "next/head";
import NotDone from "../../component/notDone/NotDone";
import type { NextPage } from "next";
import MyProject from "../../component/myProject/MyProject";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function getStaticProps() {
  const projects = await prisma.projects.findMany();

  return { props: { projects } };
}

const searchingList: NextPage<any> = (props: any) => {
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
        {/* <NotDone /> */}
        <MyProject props={props} />
      </div>
    </>
  );
};

export default searchingList;
