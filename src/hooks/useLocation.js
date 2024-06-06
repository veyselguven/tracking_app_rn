import { useEffect, useState } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      const granted = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        // (location) => {
        //   // console.log(location);
        // //   addLocation(location);
        // }
        callback
      );
      setSubscriber(granted);
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      // stop wacthing
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack, callback]);
  return [err];
};
// export default (shouldTrack, callback) => {
//   const [err, setErr] = useState(null);

//   const [subscriber, setSubscriber] = useState(null);

//   const startWatching = async () => {
//     try {
//       const { granted } = await requestForegroundPermissionsAsync();
//       await watchPositionAsync(
//         {
//           accuracy: Accuracy.BestForNavigation,
//           timeInterval: 1000,
//           distanceInterval: 10,
//         },
//         // (location) => {
//         //   // console.log(location);
//         // //   addLocation(location);
//         // }
//         callback
//       );
//       setSubscriber({ granted });
//       if (!granted) {
//         throw new Error("Location permission not granted");
//       }
//     } catch (e) {
//       setErr(e);
//     }
//   };
//   useEffect(() => {
//     if (shouldTrack) {
//       startWatching();
//     } else {
//       // stop wacthing
//       subscriber.remove();
//       setSubscriber(null);
//     }
//   }, [shouldTrack]);
//   return [err];
// };
