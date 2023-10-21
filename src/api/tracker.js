import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://fc5b-2601-646-c000-1af0-55d4-38e0-4f76-b429.ngrok.io",
});
