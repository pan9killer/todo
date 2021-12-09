interface IButton {
  label: string;
  name: string;
}
export interface IButtons extends Array<IButton> {}

export interface TodoListItemProps {
  label: string;
  id: number;
  done: boolean;
}

export interface IButtonProps {
  id: number;
}

export interface IActions {
  payload: number;
  search: string;
  type: string;
}

export interface IState {
  label: string;
  important: boolean;
  done: boolean;
  id: number;
}
export interface IStates extends Array<IState> {}
