const CHANGE_VALUE = '@TRANSLATION/CHANGE_VALUE';

// action creators
const changeValue = value => {
  return {
    type: CHANGE_VALUE,
    value,
  }
}

export const actionCreators = {
  changeValue,
};

const initialState = {
  value: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
}

export default reducer;