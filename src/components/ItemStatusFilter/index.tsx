// import { IParams } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { showAll, showActive, showDone } from "../../store/actions";

const ItemStatusFilter = () => {
  const dispatch = useDispatch();

  const showAllItems = () => {
    dispatch(showAll());
  };

  const showActiveItems = () => {
    dispatch(showActive());
  };

  const showDoneItems = () => {
    dispatch(showDone());
  };

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-outline-secondary"
        key="all"
        onClick={() => {
          showAllItems();
        }}
      >
        Все
      </button>

      <button
        type="button"
        className="btn btn-outline-secondary"
        key="done"
        onClick={() => {
          showDoneItems();
        }}
      >
        Готово
      </button>

      <button
        type="button"
        className="btn btn-outline-secondary"
        key="active"
        onClick={() => {
          showActiveItems();
        }}
      >
        Активно
      </button>
    </div>
  );
};

export default ItemStatusFilter;
