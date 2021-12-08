import { ADD_TODO, REMOVE_TODO, TOGGLE_STATUS } from "./constants";
import { IActions } from "../interfaces/interfaces";

const initialState = {
  todoData: ["Добавить изображения", "Вызвать стэйт", "Исправить стили"],
};

export const reducer: any = (state = initialState, action: IActions) => {
  switch (action.type) {
    case ADD_TODO:
      return { todoData: [...state.todoData, action.payload] };
    case TOGGLE_STATUS:
      return { ...state, todo: action.payload };
    case REMOVE_TODO:
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};
