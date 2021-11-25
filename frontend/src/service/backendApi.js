import axios from "axios";


export const getApps = (token) => {
    return axios
        .get("api/application",
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
        .get(`/api/application/${id}`,
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
        .post(`/api/application`, app,
            {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
        .then(response => response.data)
}

export const editApp = (app, id, token) => {
    return axios.put(`/api/application/${id}`, app,
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
        .post(`/api/ticket`, apiInput,
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

export const getClientId = () => {
    return axios
        .get('/auth/jira/config')
        .then(response => response.data);
}

export const postLoginWithJira = code => {
    return axios
        .post('/auth/jira/login', {code})
}