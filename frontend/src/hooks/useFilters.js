import useApplications from "./useApplications";
import {useState} from "react";


export default function useFilters() {

    const { applications } = useApplications();

    const filters = {
        filterById: "",
        filterByName: "",
        filterByStatus: "",
        filterByDocumentation: "",
        filterByBusinessContact: "",
        filterByTechnicalContact: "",
    }

    const [ filter, setFilter ] = useState({filters});
    const [ appsFiltered, setAppsFiltered ] = useState({applications});



}