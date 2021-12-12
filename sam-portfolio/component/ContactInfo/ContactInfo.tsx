import Link from "next/link";
import styles from "../ContactInfo/ContactInfo.module.css";

const ContactInfo = (props: { contactInfo?: any }) => {
  const { contactInfo } = props;

  console.log(contactInfo);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.secContent}>
          <h1 className={styles.top}>Contact me</h1>
          <div className={styles.content}>
            <div className={styles.box}>
              <h1 className={styles.title}>Contact Information</h1>
              <div key={contactInfo.id} className={styles.each}>
                {contactInfo.Name}
              </div>
              <div key={contactInfo.id} className={styles.email}>
                <Link href="mailto:samwilk18@yahoo.com">
                  <a>{contactInfo.Email}</a>
                </Link>
              </div>
              <div key={contactInfo.id} className={styles.each}>
                {contactInfo.Number}
              </div>
            </div>
            <span className={styles.line}></span>
            <div className={styles.box}>
              <h1 className={styles.title}>Location</h1>
              <div key={contactInfo.id} className={styles.each}>
                {contactInfo.City}, {contactInfo.State}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
