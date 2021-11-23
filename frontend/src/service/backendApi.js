import axios from "axios";


export const getApps = (token) => {
    return axios
        .get("api/overview",
            {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
        .then(response => {
            return response.data;
        })
}

export const getAppBy = (idObject, token) => {
    const {id} = idObject;
    return axios
        .get(`/api/details/${id}`,
            {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
        .then(response => {
            return response.data
        })
}

export const addApp = (app, token) => {
    return axios
        .post(`/api/add-app`, app,
            {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
        .then(response => response.data)
}

export const editApp = (app, id, token) => {
    return axios.put(`/api/edit-app/${id}`, app,
        {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        .then(response => response.data)
}

export const postJiraTicket = (id, appId, appName, fieldName, token) => {

    const description = "Please provide the missing documentation: " + fieldName + " for the application: " + appName + ".";
    const summary = fieldName + " for: " + appName + " (" + appId + ")"

    const apiInput = {
        summary,
        description,
        fieldName,
        id
    }

    return axios
        .post(`/jira/create-ticket`, apiInput,
            {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
        .then(response => response.data)
}

export const postLogin = credentials => {
    return axios.post("/auth/login", credentials)
}