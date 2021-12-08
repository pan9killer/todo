import { ADD_TODO, REMOVE_TODO, TOGGLE_STATUS } from "./constants";
import { IActions } from "../interfaces/interfaces";

const initialState = {
  todoData: ["Добавить изображения", "Вызвать стэйт", "Исправить стили"],
};

const reducer = (state = initialState, action: IActions) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todo: action.payload };
    case TOGGLE_STATUS:
      return { ...state, todo: action.payload };
    case REMOVE_TODO:
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};

export default reducer;
