import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        title="go to Sign in"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="go to Main flow "
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

const style = StyleSheet.create({});

export default SignupScreen;
