import Button from "../../ui/Button";
import styles from "./StartSection.module.scss";

const StartSection = () => {
  return (
    <div className={styles.startContainer}>
      <div className={styles.startSection}>
        <h1>Organizing your day activity with Todo Daily</h1>
        <div className={styles.hero}>
          <Button name={"Get started"} />
        </div>
      </div>
    </div>
  );
};

export default StartSection;
