import * as actionType from "./actionTypes";
import axios from "axios";
import setAxiosAuth from "../../setAxiosAuthHeader";
import jwt_decode from "jwt-decode";

// export const signup = (data, history) => async dispatch => {
//   try {
//     dispatch(setAuthLoading());
//     const user = await axios.post(
//       "https://deutsch-lernen-abc.herokuapp.com/api/user/signup",
//       data
//     );
//     if (user) {
//       dispatch(clearErrors());
//       history.push("/login");
//     }
//   } catch (e) {
//     dispatch({
//       type: actionType.LOGIN_FAILED
//     });
//     dispatch({
//       type: actionType.GET_ERRORS,
//       payload: e.response.data.error || null
//     });
//   }
// };
// export const checkAuthTimeout = (expiresTime) => {
//    return dispatch => {
//        setTimeout(() => {
//            dispatch(logout())
//        }, expiresTime)
//    }
// }

// export const login = (data, history) => async dispatch => {
//   try {
//     dispatch(setAuthLoading());
//     const user = await axios.post(
//       "https://deutsch-lernen-abc.herokuapp.com/api/user/login",
//       data
//     );
//     if (user) {
//       console.log(user);
//       dispatch(clearErrors());
//       localStorage.setItem("tokenABC", user.data.token);
//       localStorage.setItem("expirationDate", user.data.expirationDate);
//       localStorage.setItem("userId", user.data.userId);
//       setAxiosAuth(user.data.token);
//       const tokenDecoded = jwt_decode(user.data.token);
//       dispatch({
//         type: actionType.LOGIN_SUCCEED,
//         payload: tokenDecoded
//       });
//       history.push("/");
//     }
//   } catch (e) {
//     dispatch({
//       type: actionType.LOGIN_FAILED
//     });
//     dispatch({
//       type: actionType.GET_ERRORS,
//       payload: e.response.data.error || null
//     });
//   }
// };
// export const logout = () => dispatch => {
//   localStorage.removeItem("tokenABC");
//   localStorage.removeItem("userId");
//   localStorage.removeItem("expirationDate");

//   dispatch({
//     type: actionType.LOGOUT_SUCCEED
//   });
// };

// export const currentUser = userData => {
//   return {
//     type: actionType.LOGIN_SUCCEED,
//     payload: userData
//   };
// };

// Set loading state
export const setAuthLoading = () => {
  return {
    type: actionType.AUTH_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: actionType.CLEAR_ERRORS
  };
};
