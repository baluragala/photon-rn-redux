import {
  INC,
  DEC,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS
} from "../actionTypes";

function counterReducer(prevState = { counter: 0 }, action) {
  switch (action.type) {
    case INC:
      return { counter: prevState.counter + 1 };
    case DEC:
      return { counter: prevState.counter - 1 };
    case GET_PRODUCTS:
      return { ...prevState, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...prevState, isLoading: false, products: action.products };
    case GET_PRODUCTS_FAILURE:
      return { ...prevState, isLoading: false, error: action.error };
    default:
      return prevState;
  }
}

export default counterReducer;
