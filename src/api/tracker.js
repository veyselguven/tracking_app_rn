import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://9440-2601-646-c000-1af0-1157-2176-626e-a5b4.ngrok.io",
});
