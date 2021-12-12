/* eslint-disable @next/next/no-img-element */
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import styles from "../Layouts/Layout.module.css";
// import Image from "next/image";
import { Suspense } from "react";
import Jax from "../../public/Jax.jpeg";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className={styles.back}>
        <div className={styles.container}>
          <Navbar />

          <div className={styles.content}>{children}</div>
        </div>
      </div>
      <div className={styles.Photo}>
        <img src="/Jax.jpeg" alt="Jax Skyline" className={styles.jax} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
