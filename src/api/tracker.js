import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://cb7f-2601-646-c000-1af0-959-9438-b165-ccdf.ngrok.io",
});
