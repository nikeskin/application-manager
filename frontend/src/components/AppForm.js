import HorizontalLinearStepper from "./HorizontalLinearStepper";
import PreviousPageButton from "./PreviousPageButton";
import NextPageButton from "./NextPageButton";
import FinalSubmitButton from "./FinalSubmitButton";
import * as React from "react";
import useForm from "../hooks/useForm";
import styled from "styled-components";
import Box from "@mui/material/Box";
import {useEffect} from "react";
import {getAppBy} from "../service/backendApi";
import {useLocation} from "react-router-dom";

export default function AppForm( { id }) {

    const {formNumber, setFormNumber, appData, setAppData, errorMessage, setErrorMessage, renderPage} = useForm();

    const query = new URLSearchParams(useLocation().search);
    const jumpToFormNumber = query.get("formNumber");

    useEffect(() => {
        if (id) {
            getAppBy(id)
                .then(r => setAppData(r))
                .catch(console.error);
        }

    }, [id, setAppData])

    useEffect(() => {
        if (jumpToFormNumber) {
            setFormNumber(parseInt(jumpToFormNumber));
        }
    },[jumpToFormNumber, setFormNumber])

    return (

        <MuiBox
            sx={{
                width: '80%',
            }}
        >
            <form>
                <HorizontalLinearStepper formNumber={formNumber}/>
                {renderPage()}
                { (errorMessage.length > 0 ) && <p style={{color: "red", margin: "2% 0 0 5%"}}>{errorMessage}</p> }
                {formNumber >1 && <PreviousPageButton setErrorMessage={setErrorMessage} setAppData={setAppData} formNumber={formNumber} setFormNumber={setFormNumber}/> }
                {formNumber <3 && <NextPageButton setErrorMessage={setErrorMessage} appData={appData} formNumber={formNumber} setFormNumber={setFormNumber}/> }
                {formNumber === 3 && <FinalSubmitButton appData={appData}/> }
            </form>
        </MuiBox>
    )

}

const MuiBox = styled(Box)`
  && {
    background-color: darkgrey;
    opacity: 95%;
    padding-top: 2%;
    padding-right: 10%;
    padding-left: 10%;
  }
`


