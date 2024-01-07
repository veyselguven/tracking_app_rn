import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  // let points = [];
  // for (let i = 0; i < 20; i++) {
  //   if (i % 2 == 0) {
  //     points.push({
  //       latitude: 37.33233 + i * 0.001,
  //       longitude: -122.03121 + i * 0.001,
  //     });
  //   } else {
  //     points.push({
  //       latitude: 37.33233 - i * 0.002,
  //       longitude: -122.03121 + i * 0.001,
  //     });
  //   }
  // }

  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  //console.log(state);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <View>
      <Text>I am a Map</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // region={{
        //   ...currentLocation.coords,
        //   latitudeDelta: 0.01,
        //   longitudeDelta: 0.01,
        // }}
      >
        {/* <Polyline coordinates={points} /> */}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;

/* 

import { requestForegroundPermissionsAsync } from 'expo-location';

const { granted } = await requestForegroundPermissionsAsync();


  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };
*/
