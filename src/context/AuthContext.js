import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
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
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
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
  { isSignedIn: false }
);
