const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }
  // if (action.type === 'DELETE_TRANSACTION') {
  //   return {
  //     ...state,
  //     transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
  //   };
  // } else if (action.type === 'ADD_TRANSACTION') {
  //   return {
  //     ...state,
  //     transactions: [action.payload, ...state.transactions]
  //   };
  // }


  // return state;
}

export default AppReducer