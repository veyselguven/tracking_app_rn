import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://6fcb-2601-646-c000-1af0-a52d-369f-f4b4-6fd3.ngrok-free.app",
});
