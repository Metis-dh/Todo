import smallTaskIcon from "../../../assets/icons/small-task.svg";
import writeIcon from "../../../assets/icons/write.svg";
import doItIcon from "../../../assets/icons/do-it.svg";
import repeatIcon from "../../../assets/icons/repeat.svg";

import styles from "./StepSection.module.scss";

const StepSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stepSection}>
        <h2>Don’t let your day doing nothing</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <img src={smallTaskIcon} alt="task" />
            <p>Small task</p>
          </div>
          <div className={styles.step}>
            <img src={writeIcon} alt="task" />
            <p>Write it</p>
          </div>
          <div className={styles.step}>
            <img src={doItIcon} alt="task" />
            <p>Do it</p>
          </div>
          <div className={styles.step}>
            <img src={repeatIcon} alt="task" />
            <p>Repeat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
