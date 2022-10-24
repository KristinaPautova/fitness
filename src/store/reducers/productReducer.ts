import {
  ProductAction,
  ProductActionTypes,
  ProductState,
} from "../../types/product";

const INIT_STATE: ProductState = {
  products: [],
  product: null,
  error: null,
  loading: false,
};

export const productReducer = (
  state = INIT_STATE,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCT_SUCCESS:
      return { ...state, products: action.payload };
    case ProductActionTypes.GET_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    case ProductActionTypes.GET_PRODUCT_LOADING:
      return { ...state, loading: action.payload };
    case ProductActionTypes.GET_ONE_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
