import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL:
    "https://b6a9-2603-3024-18d6-b000-e05f-1fd4-ebbb-275c.ngrok-free.app",
});
// export default axios.create({
//   headers: {
//     "ngrok-skip-browser-warning": "true",
//   },
//   baseURL: "https://73df-2601-640-8c81-5fb0-f497-4414-4697-37be.ngrok-free.app",
// });

// ngrok http 3000

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
