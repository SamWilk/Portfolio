import styles from "../Education/Education.module.css";
import Head from "next/head";

const Education = (props: { schools: any }) => {
  const { schools } = props;
  const unf = schools[0];
  const fscj = schools[1];
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        Education
        <ul>
          {schools.map((items) => {
            <li key={items.id}>{items.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Education;
