import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://afd3-2601-646-c000-1af0-95e9-c8e2-a9f0-cfcf.ngrok-free.app",
});
