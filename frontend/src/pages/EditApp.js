import * as React from "react";

import AppForm from "../components/AppForm";

import {useParams} from "react-router-dom";

export default function EditApp() {

    const id = useParams();

    return <AppForm id={id} />
}