import axios from "axios";


export const getApps = () => {
    return axios
        .get("api/overview")
        .then(response => {return response.data;
        })


}