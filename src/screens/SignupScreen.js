import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
});

export default SignupScreen;
