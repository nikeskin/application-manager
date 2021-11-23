import {useCallback, useState} from "react";
import {getAppBy} from "../service/backendApi";


export default function useDetailedApplication() {

    const [application, setDetailedApplication] = useState({});

    const getAppById = useCallback(id => {
        getAppBy(id, localStorage.getItem("token"))
            .then(app => setDetailedApplication(app))
            .catch(error => console.error(error))
    }, [])

    return { application, getAppById }
}