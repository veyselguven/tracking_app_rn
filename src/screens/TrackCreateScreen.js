import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { Text } from "react-native-elements";
import Map from "../components/Map";
import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);
  // const [err]=useLocation((location)=>{addLocation(location)})

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
