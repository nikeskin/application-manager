import useDetailedApplication from "../hooks/useDetailedApplication";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import styled from "styled-components";

export default function DetailsPage() {

    const id = useParams();
    const { application, getAppById } = useDetailedApplication();

    useEffect(() => {
        getAppById(id)
    }, [id, getAppById])

    return (

        <Wrapper>
            <h2>{application.appName}</h2>
        </Wrapper>

    )

}

const Wrapper = styled.div`
  margin: 0;
  background-color: dimgray;
  opacity: 1;
`