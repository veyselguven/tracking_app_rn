import React, { useContext, useCallback } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation, state } = useContext(LocationContext);
  // console.log("outside", state.recording);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(isFocused, callback);
  // isFocused true we want start location tracking
  // isFocused false stopped tracking all together,second argumen is callback fucnt, anyrtime use location change is/
  // const [err]=useLocation((location)=>{addLocation(location)})
  // console.log(isFocused);
  return (
    <SafeAreaView>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please enable Location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
