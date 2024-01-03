import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://89d4-2601-646-c000-1af0-58a9-70fd-52b8-66ac.ngrok-free.app",
});
