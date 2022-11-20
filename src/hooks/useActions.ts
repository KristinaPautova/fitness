import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActionCreators from "../store/action/product";
import * as authActionCreators from "../store/action/auth";

export const useProductActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(productActionCreators, dispatch);
};

export const useAuthActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(authActionCreators, dispatch);
};
