interface IButton {
  label: string;
  name: string;
}
export interface IButtons extends Array<IButton> {}

export interface TodoListItemProps {
  label: string;
}

export interface IActions {
  payload: object;
  type: string;
}
