import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://67ab-2601-646-c000-1af0-f4d1-8ca0-8905-c2d7.ngrok-free.app",
});
