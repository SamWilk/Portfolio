import styles from "../notDone/NotDone.module.css";

const NotDone = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.litteBox}>Whoops!</span>
          <div>Still working on this one! Will hopefully be done soon!</div>
        </div>
      </div>
    </>
  );
};

export default NotDone;
