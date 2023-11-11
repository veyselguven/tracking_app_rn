import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://9c3e-2601-646-c000-1af0-1180-5594-b7ca-b68f.ngrok.io",
});
