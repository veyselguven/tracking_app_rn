import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://f25c-2601-640-8c81-5fb0-50a8-865-48f1-164f.ngrok-free.app",
});
