import { useDispatch } from "react-redux";
import { TodoListButtonsI } from "../../interfaces/interfaces";

export const Button = ({
  item,
  component,
  handler,
  classes,
}: TodoListButtonsI) => {
  const dispatch = useDispatch();

  const stateHandler = (func: Function) => {
    dispatch(func(item));
  };

  return (
    <button
      type="button"
      className={classes}
      onClick={() => stateHandler(handler)}
    >
      {component}
    </button>
  );
};
