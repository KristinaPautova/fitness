import { ProductAction, ProductActionTypes } from "../../types/product";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { IProduct } from "../../types/intProduct";
import { Dispatch } from "redux";
import { db } from "../../fair";

export const addProduct =
  (newProduct: IProduct) => async (dispatch: Dispatch<ProductAction>) => {
    try {
      await addDoc(collection(db, "product"), newProduct);
    } catch (error) {
      console.log(error);
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
        payload: "Error" + error,
      });
    }
  };
export const getProduct = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.GET_PRODUCT_LOADING, payload: true });
      const res = query(collection(db, "product"), orderBy("title"));
      onSnapshot(res, (querySnapshot) => {
        const product: any[] = [];

        querySnapshot.forEach((doc) => {
          product.push(doc);
        });
        // console.log(product)
        dispatch({
          type: ProductActionTypes.GET_PRODUCT_SUCCESS,
          payload: product,
        });
      });
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_LOADING,
        payload: false,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
        payload: "Error has occured" + error,
      });
    }
  };
};
export const deleteProduct = (id: string) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      await deleteDoc(doc(db, "product", id));
    } catch (error) {
      console.log(error);
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
        payload: "Error has occured" + error,
      });
    }
  };
};

export const getOneProduct = (id: string | undefined) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      let carDet = await getDocs(collection(db, "product"));

      carDet.forEach((item) => {
        if (item.data().id == id) {
          dispatch({
            type: ProductActionTypes.GET_ONE_PRODUCT,
            payload: item.data(),
          });
        }
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
        payload: "Error has occured" + error,
      });
    }
  };
};

export const saveProduct = (id: any, updatedProduct: any) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      const snap = await getDocs(collection(db, "product"));
      snap.forEach((item) => {
        if (item.data().id == id) {
          updateDoc(doc(db, "product", item.id), updatedProduct).then(() =>
            getProduct()
          );
        }
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
        payload: "Error has occured" + error,
      });
    }
  };
};
