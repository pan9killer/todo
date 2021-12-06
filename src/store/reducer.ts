import { ADD_TODO, REMOVE_TODO } from './constants'

const initialState = {};

const reducer = (state = initialState, action: any) => {
  switch(action.type){
    case ADD_TODO:
      return {...state, todo: action.payload};
    case REMOVE_TODO:
      return {...state, todo: action.payload};
    default:
      return state;
  };
};

export default reducer;