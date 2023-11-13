import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { requestForegroundPermissionsAsync } from "expo-location";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import "../_mockLocation";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please enable Location services</Text> : null}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default TrackCreateScreen;
