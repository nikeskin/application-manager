import {useCallback, useState} from "react";
import {getAppBy} from "../service/backendApi";


export default function useDetailedApplication() {

    const [application, setDetailedApplication] = useState({});

    const getAppById = useCallback(id => {
        getAppBy(id)
            .then(app => setDetailedApplication(app))
            .catch(error => console.error(error))
    }, [])

    const getFormattedDescription = description => {
        return description.replace()
    }

    return { application, getAppById, getFormattedDescription }
}