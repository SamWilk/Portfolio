import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import styles from "../Layouts/Layout.module.css";
import dynamic from "next/dynamic";

const Bgimage = dynamic(() => import("../images/BGImage"));

const Layout = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
