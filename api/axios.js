
import axios from "axios";

const api = axios.create({
  baseURL:   'http://localhost:5246',
  headers: { 
    contentType: "application/json",
  },
}); 

export default api;