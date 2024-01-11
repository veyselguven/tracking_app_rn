import axios from "axios";

export default axios.create({
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  baseURL: "https://b745-2601-646-c000-1af0-e0b7-8bfa-cecf-6e91.ngrok-free.app",
});
