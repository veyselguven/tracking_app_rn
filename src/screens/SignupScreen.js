import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  // console.log(state);
  return (
    <View style={styles.container}>
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
