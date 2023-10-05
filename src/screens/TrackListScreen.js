import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const style = StyleSheet.create({});

export default TrackListScreen;
