import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://e3e8-2601-640-8c01-1670-645f-c735-a6d-34c.ngrok-free.app",
});
