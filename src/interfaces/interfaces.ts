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

export interface IState {
  label: string;
  important: boolean;
  done: boolean;
  id: number;
}

// export interface IActions {
//   payload: IState;
//   search: string;
//   type: string;
// }

export interface IAction {
  payload: IState;
  type: string;
}

export interface IToggleRemove {
  payload: number;
  type: string;
}

export interface ISearch {
  payload: string;
  type: string;
}

export interface TodoListItemI {
  item: IState;
}

export interface IParams {
  all: Function;
  done: Function;
  active: Function;
}

export interface TodoListItemI {
  item: IState;
}
