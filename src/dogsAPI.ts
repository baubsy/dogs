import axios from "axios";
import API_KEY from "./secrets";

export default axios.create({
    baseURL: "https://api.thedogapi.com/v1/",
    headers: {
        'x-api-key': API_KEY
    },
});