import styles from "../notDone/NotDone.module.css";

const NotDone = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.litteBox}>Whoops!</h1>
          <div className={styles.litteBox2}></div>
          <h3>Still working on this one! Will hopefully be done soon!</h3>
        </div>
      </div>
    </>
  );
};

export default NotDone;
