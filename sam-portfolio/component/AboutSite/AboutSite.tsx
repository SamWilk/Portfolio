/* eslint-disable @next/next/no-page-custom-font */
import styles from "../AboutSite/AboutSite.module.css";
import Link from "next/link";
import Head from "next/head";

const AboutSite = () => {
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
        <div className={styles.content}>
          <div className={styles.miniBox}>
            <h1>About Site</h1>
            <div className={styles.text}>
              This site was built off of Next Js. Which is a modern framework
              that is built off of React Js. It is full stack framework that
              allows developers to work with a backend without having to set up
              a backend. Most the the data that is being displayed on this
              website is being used with Next Js and Prisma. Prisma is an open
              source next-generation ORM.
            </div>
            <span className={styles.line}></span>
            <div className={styles.text}>
              As for the database used for this website, I used SQlite. Prisma
              supports SQlite and it is open source as well so I figured it was
              better fit for this static site. Prisma is Auto-generated and
              type-safe query builder for Node.js & TypeScript. Prisma Client
              can be used in any Node.js (supported versions) or TypeScript
              backend application (including serverless applications and
              microservices). This can be a REST API, a GraphQL API, a gRPC API,
              or anything else that needs a database.
            </div>
            <span className={styles.line}></span>
            <div className={styles.text}>
              I find that working with Next Js is very easy to do and the
              documentation from the site makes it very easy to follow. Having
              worked with blitz Js, Next Js, and alittle Angular Js both react
              based framworks are very easy to catch on and work with. Also both
              Next Js and Blitz Js being fullstack frameworks makes working with
              queries and mutations so much easier.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSite;
