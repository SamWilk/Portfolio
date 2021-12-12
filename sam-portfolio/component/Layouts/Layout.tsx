import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import styles from "../Layouts/Layout.module.css";
import Image from "next/image";
import { Suspense } from "react";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.Photo}>
        {/* <Image src="/Jax.jpeg" layout="fill" alt="Jax SkyLine" /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
