import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IState } from "../../interfaces/interfaces";
import styles from "./index.module.scss";

const AppHeader = () => {
  const state = useSelector<RootState, IState[]>((state) => state.reducer);
  const notDone = state.filter((item) => item.done === false);
  const done = state.filter((item) => item.done === true);

  return (
    <div className={styles.header}>
      <h1>React-Redux ToDo app</h1>
      <h2>{`${notDone.length} не сделано, ${done.length} сделано`}</h2>
    </div>
  );
};

export default AppHeader;
