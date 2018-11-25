import * as actionType from "../actions/actionTypes";

const initialState = {
  levels: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCH_LEVELS_SUCCEED:
      return {
        ...state,
        levels: action.payload,
        loading: false
      };
    case actionType.ADD_NEW_LEVEL:
      return {
        ...state,
        levels: state.levels.concat(action.payload),
        loading: false
      };

    case actionType.LEVELS_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_LEVELS_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
