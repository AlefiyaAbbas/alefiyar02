import styles from "../styles/socials.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { ImProfile } from "react-icons/im";

const Socials = () => {
  return (
    <div className={styles.socialsContainer}>
      <div className={styles.card}>
        <span className="font-cabinet">Socials</span>
        <a className={styles.socialLink} href="https://github.com/AlefiyaAbbas" target="_blank">
          <BsGithub />
        </a>

        <a className={styles.socialLink} href="https://www.linkedin.com/in/alefiya-rampurawala-30851a204/" target="_blank">
          <BsLinkedin/>
        </a>

        <a className={styles.socialLink} href="mailto:alefiyar02@gmail.com" target="_blank">
          <SiGmail />
        </a>

        <a className={styles.socialLink} href="AlefiyaRampurawala_Resume.pdf" target="_blank">
        <ImProfile/>
        </a>
      </div>
    </div>
  );
};

export default Socials;
