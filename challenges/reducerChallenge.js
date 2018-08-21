const initialState = {
  flavor: []
}

export default (state = initialState, action) => {
  switch (action.type) {
  case DELETE_FLAVOR:
    return { ...state, flavor: state.flavor.filter(icecream => icecream.flavor === action.flavor) };
  default:
    return state
  }
};
