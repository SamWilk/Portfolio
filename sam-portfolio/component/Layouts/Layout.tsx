import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import styles from "../Layouts/Layout.module.css";

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
