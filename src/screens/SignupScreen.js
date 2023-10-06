import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>

      {/* <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        title="go to Sign in"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="go to Main flow "
        onPress={() => navigation.navigate("mainFlow")}
      /> */}
    </>
  );
};

const style = StyleSheet.create({});

export default SignupScreen;
