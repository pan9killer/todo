import { useDispatch } from "react-redux";
import { IStatusButtons } from "../../interfaces/interfaces";

const Button = ({ label, handler }: IStatusButtons) => {
  const dispatch = useDispatch();

  const dispatchHandler = (func: Function) => {
    dispatch(func());
  };

  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => {
        dispatchHandler(handler);
      }}
    >
      {label}
    </button>
  );
};

export default Button;
