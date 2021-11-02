import axios from "axios";


export const getApps = () => {
    return axios
        .get("/overview")
        .then(response => {return response.data;
        })


}