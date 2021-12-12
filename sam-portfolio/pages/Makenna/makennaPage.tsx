import Image from "next/image";
import styles from "./Makenna/makenna.module.css";

const makennaPage = () => {
  return (
    <>
      <div>
        <Image src="/MakennaPic.jpeg" width={600} height={600} layout="fixed" />
      </div>
    </>
  );
};

export default makennaPage;
