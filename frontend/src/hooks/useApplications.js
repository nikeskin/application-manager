import {useEffect, useState} from "react";
import {getApps} from "../service/backendApi";

export default function useApplications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        getApps()
            .then(apps => setApplications(apps))
            .catch(err => console.log(err));
    }, [])

    return { applications }
}