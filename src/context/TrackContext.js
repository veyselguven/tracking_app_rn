import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => async (name, locations) => {
  // make a request to our api
  // console.log(name, locations.length);
  await trackerApi.post("/tracks", { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  [] // default state
);
