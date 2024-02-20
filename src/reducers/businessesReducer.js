export const businessesReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BUSINESSES':
      return action.payload;
      break;
    default:
      return null;
  }
}