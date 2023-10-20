import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://be0c-2601-646-c000-1af0-f162-5ab6-a6bc-8bbe.ngrok.io",
});
