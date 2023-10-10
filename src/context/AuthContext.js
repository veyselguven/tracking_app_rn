import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const sigup = () => {
  return ({ email, password }) => {
    //make api request to sign up with that email and password
    // if we sign up,modify our state,and say that we are authenticated
    // if signing up fails, we probably need to reflect an error somewhere
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
  { signin, singout, signin },
  { isSignedIn: false }
);
