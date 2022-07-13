import axios from "axios";
import API_KEY from "./secrets";

export default axios.create({
    baseURL: "https://api.thedogapi.com/v1/",
    params: {
        key: API_KEY,
    },
});