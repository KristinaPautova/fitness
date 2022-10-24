import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActionCreators from "../store/action/product";

export const useProductActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(productActionCreators, dispatch);
};
