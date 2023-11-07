import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://3706-2603-3024-18d6-b000-414e-4c2b-7b3-fc14.ngrok.io",
});
