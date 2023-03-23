import TodayTasks from "../../components/TodayTasks";
import Sidebar from "../../components/ui/Sidebar";
import Header from "../../components/Header";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <TodayTasks />
      </div>
    </>
  );
};

export default Home;
