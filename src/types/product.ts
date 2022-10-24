import { IProduct } from "./intProduct";
export interface ProductState {
  loading: boolean;
  error: string | null;
  products: IProduct[];
  product: {} | null;
}

export enum ProductActionTypes {
  GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR",
  GET_ONE_PRODUCT = "GET_ONE_PRODUCT",
  GET_PRODUCT_LOADING = "GET_PRODUCT_LOADING",
}

interface ProductActionSuccess {
  type: ProductActionTypes.GET_PRODUCT_SUCCESS;
  payload: IProduct[];
}
interface ProductActionUpdate {
  type: ProductActionTypes.GET_ONE_PRODUCT;
  payload: object;
}

interface ProductActionLoading {
  type: ProductActionTypes.GET_PRODUCT_LOADING;
  payload: boolean;
}
interface ProductActionError {
  type: ProductActionTypes.GET_PRODUCT_ERROR;
  payload: string;
}

export type ProductAction =
  | ProductActionSuccess
  | ProductActionLoading
  | ProductActionError
  | ProductActionUpdate;
