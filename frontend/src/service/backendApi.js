import axios from "axios";


export const getApps = () => {
    return axios
        .get("api/overview")
        .then(response => {return response.data;
        })
}

export const getAppBy = idObject => {
    const { id } = idObject;
    return axios
        .get(`/api/details/${id}`)
        .then(response => {
            return response.data
        })
}

export const addApp = app => {
    return axios
        .post(`/api/add-app`, app)
        .then(response => response.data)
}

export const editApp = (app, id) => {
    return axios.put(`/api/edit-app/${id}`, app)
        .then(response => response.data)
}

export const postJiraTicket = (id, appId, appName, fieldName) => {

    const description = "Please provide the missing documentation: " + fieldName + " for the application: " + appName + ".";
    const summary = fieldName + " for: " + appName + " (" + appId + ")"

    const apiInput = {
        summary,
        description,
        fieldName,
        id
    }

    return axios
        .post(`/jira/create-ticket`, apiInput)
        .then(response => response.data)
}