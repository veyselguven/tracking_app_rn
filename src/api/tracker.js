import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://849c-2601-640-8c81-5fb0-1c4f-6bee-1b14-1f3a.ngrok-free.app",
});
