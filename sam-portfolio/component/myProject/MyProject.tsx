import styles from "../myProject/MyProject.module.css";

const MyProject = (prop: any) => {
  const {
    props: { projects },
  } = prop;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {projects.map((items: any) => (
            <div key={items.id}>
              <div key={items.id}>{items.name}</div>
              <div key={items.id}>fdafdsa</div>
            </div>
          ))}
        </div>
        <pre>{JSON.stringify(projects, 0, 2)}</pre>
      </div>
    </>
  );
};

export default MyProject;
