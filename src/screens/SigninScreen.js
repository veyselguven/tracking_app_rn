import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage=""
        onSubmit={() => {}}
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
