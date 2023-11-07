import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://a682-2601-646-c000-1af0-561-6f01-9307-e12e.ngrok.io",
});
