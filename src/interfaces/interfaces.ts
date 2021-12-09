interface IButton {
  label: string;
  name: string;
}
export interface IButtons extends Array<IButton> {}

export interface TodoListItemProps {
  label: string;
}

export interface IActions {
  payload: string;
  type: string;
}

export interface IState {
  todoData: Array<string>;
}
