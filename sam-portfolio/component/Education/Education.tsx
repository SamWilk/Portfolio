import styles from "../Education/Education.module.css";
import Head from "next/head";
import { useEffect } from "react";
import { getSchools } from "../../pages/api/getSchools";

export const getServerSIdeProps = async () => {
  // const schools = await prisma.school.findMany();
  const school = [
    {
      id: 1,
      name: "University of North Florida",
    },
  ];
  return {
    props: {
      school,
    },
  };
};

const Education = ({ school }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>Education</div>
    </>
  );
};

export default Education;
