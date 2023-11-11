import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  // useEffect(() => {
  //   tryLocalSignin();
  // }, []);
  // console.log(state);
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
        onWillFocus={clearErrorMessage}
        // onDidFocus={() => {}}
        // onWillBlur={() => {}}
        // onDidBlur={() => {}}
      />
      <AuthForm
        headerText="Sing Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sing Up"
        // onSubmit={({email,password})=>signup({email,password})}
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account ? Sing in instead! "
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 10,
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default SignupScreen;
