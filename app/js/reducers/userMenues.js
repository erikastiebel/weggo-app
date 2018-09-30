import {
  SAVE_MENU_LIST,
  SAVE_MENU_LIST_SUCCESS,
  SAVE_MENU_LIST_FAILURE
} from '../actions/actions';

export default function userMenuesReducer( state = {isLoading: false, savedMenues: [], error: null}, action ) {
  switch (action.type) {

  case SAVE_MENU_LIST:
    return {...state, isLoading: true};

  case SAVE_MENU_LIST_SUCCESS:
    return {...state, isLoading: false, savedMenues: [...state.savedMenues, action.recipeListData]};

  case SAVE_MENU_LIST_FAILURE:
    return {...state, isLoading: false, error: action.error};

  default:
    return state;
  }
}
