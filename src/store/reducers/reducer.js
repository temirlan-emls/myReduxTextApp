function reducer(state, action) {
  switch (action.type) {
    case 'test':
      return { testValue: action.value };

    default:
      return state;
  }
}

export default reducer
