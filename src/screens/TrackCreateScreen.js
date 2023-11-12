import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import React from "react";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h2>TrackCreateScreen</Text>
      <Map />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default TrackCreateScreen;
