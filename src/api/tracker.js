import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL:
    "https://7921-2603-3024-18d6-b000-713d-83f6-9fdf-69f0.ngrok-free.app",
});
