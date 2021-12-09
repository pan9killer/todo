import { useDispatch } from "react-redux";
import { searchData } from "../../store/actions";
import styles from "./index.module.scss";

const SearchPanel = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      className={styles.search}
      placeholder="поиск дела"
      onChange={(e) => dispatch(searchData(e.target.value))}
    />
  );
};

export default SearchPanel;
