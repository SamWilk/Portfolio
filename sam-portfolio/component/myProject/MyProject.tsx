import styles from "../myProject/MyProject.module.css";
import Link from "next/link";

const MyProject = (prop: any) => {
  const {
    props: { projects },
  } = prop;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {projects.map((items: any) => (
            <Link href={items.site} key={items.id}>
              <a>
                <div key={items.id} className={styles.fadedContainer}>
                  <div className={styles.fadedBack}></div>
                  <div className={styles.organizeInfo}>
                    <div key={items.id} className={styles.projectText}>
                      {items.name}
                    </div>
                    <span className={styles.line}></span>
                    <div key={items.id} className={styles.siteDescription}>
                      {items.discription}
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        {/* <pre>{JSON.stringify(projects, 0, 2)}</pre> */}
      </div>
    </>
  );
};

export default MyProject;
