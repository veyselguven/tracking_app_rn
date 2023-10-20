import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};
/* 
 make api request to sign up with that email and password
 if we sign up,modify our state,and say that we are authenticated
 if signing up fails, we probably need to reflect an error somewhere
*/
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      // console.log(response.data);
      await AsyncStorage.setItem("token", response.data.token);
      // await AsyncStorage.getItem("token");
      dispatch({ type: "signup", payload: response.data.token });
    } catch (err) {
      //console.log(err.response.data);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to sigin
    // handle success by updating state
    //handle failure by showing error message (somehow)
  };
};
const singout = () => {
  return () => {
    // somehow sign out !
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, singout, signup },
  { token: null, errorMessage: "" }
);
