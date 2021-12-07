import styles from "./index.module.scss";

const SearchPanel = () => {
  return (
    <input type="text" className={styles.search} placeholder="поиск дела" />
  );
};

export default SearchPanel;
