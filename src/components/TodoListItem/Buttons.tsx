import { useDispatch } from "react-redux";
import { removeSelectedItem, toggleImportant } from "../../store/actions";
import { IState, TodoListItemI } from "../../interfaces/interfaces";
import Trash from "../icons/Trash";
import Exclamation from "../icons/Exclamation";

export const Buttons = ({ item }: TodoListItemI) => {
  const dispatch = useDispatch();

  const removeItem = (index: IState) => {
    dispatch(removeSelectedItem(index));
  };

  const toggleImportantItem = (index: IState) => {
    dispatch(toggleImportant(index));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={() => toggleImportantItem(item)}
      >
        <Exclamation />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={() => removeItem(item)}
      >
        <Trash />
      </button>
    </>
  );
};
