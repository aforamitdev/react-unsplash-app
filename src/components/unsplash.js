import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 353ae6b20b6ec372d8a9b0ced4a3e332d5e81589b33d448a5508b78c577aef60"
  }
});
