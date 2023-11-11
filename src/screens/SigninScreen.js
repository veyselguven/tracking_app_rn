import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

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
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sing In"
      />
      <NavLink
        text="Dont have an account? Sing up instead"
        routeName="Signup"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

// SigninScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };
// SigninScreen.navigationOptions = () => {
//   return {
//     header: null,
//   };
// };

export default SigninScreen;
