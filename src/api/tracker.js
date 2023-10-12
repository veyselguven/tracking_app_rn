import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://59b8-2601-646-c000-1af0-d97f-bab-47c4-22d.ngrok.io/",
});
