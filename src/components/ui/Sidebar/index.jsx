import today from "../../../assets/icons/today.svg";
import yesterday from "../../../assets/icons/calendar.svg";
import upcoming from "../../../assets/icons/upcoming.svg";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <ul>
          <li>
            <img className={styles.active} src={today} alt="today" />
            <p>Today</p>
          </li>
          <li>
            <img src={yesterday} alt="yesterday" />
            <p>Yesterday</p>
          </li>
          <li>
            <img src={upcoming} alt="upcoming" />
            <p>Upcoming</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
