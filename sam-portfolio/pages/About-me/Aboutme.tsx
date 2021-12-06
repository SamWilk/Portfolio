import styles from "../About-me/Aboutme.module.css";
import Link from "next/link";

const Aboutme = () => {
  function showEducation() {
    let list = "words go here";
    document.getElementById("text")!.innerHTML = list;
  }
  function showWork() {
    let list = "Words were here";
    document.getElementById("text")!.innerHTML = list;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.list}>
          <Link href="/About-me/Aboutme">
            <a onClick={() => showEducation()}>Education</a>
          </Link>
          <Link href="/About-me/Aboutme">
            <a onClick={() => showWork()}>Work</a>
          </Link>
        </div>
        <div id="text"></div>
      </div>
    </>
  );
};

export default Aboutme;
