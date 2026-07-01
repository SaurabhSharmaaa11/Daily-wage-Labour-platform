import axios from "axios";

const API = axios.create({
    baseURL:"https://daily-wage-labour-backend.onrender.com/api"
});

export default API;