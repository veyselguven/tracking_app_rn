import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://03aa-2601-646-c000-1af0-74f0-5bbd-dc0e-c0b1.ngrok-free.app",
});
