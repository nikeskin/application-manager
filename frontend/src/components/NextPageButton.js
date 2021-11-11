import Button from "@mui/material/Button";
import styled from "styled-components";


export default function NextPageButton({ setErrorMessage, appData, formNumber, setFormNumber}) {

    const increaseFormNumber = (event) => {
        event.preventDefault();
        const newFormNumber = formNumber + 1;
        setFormNumber(newFormNumber);
    }

    const validateInput = (event) => {
        if (formNumber === 1) {
            if (appData.appName.length === 0 || appData.description.length === 0) {
                setErrorMessage("Enter a valid application name and description.");
            } else {
                increaseFormNumber(event)
                setErrorMessage("");
            }
        } else if (formNumber === 2) {
            if (appData.businessContact.length === 0 || appData.technicalContact.length === 0) {
                setErrorMessage("Enter valid contacts.");
            } else {
                increaseFormNumber(event)
                setErrorMessage("");
            }
        }
    }


    return (
            <MuiButton onClick={validateInput}>Next</MuiButton>
    )

}

const MuiButton = styled(Button)`
  && {
    margin-top: 2%;
    margin-left: 5%;
    margin-bottom: 10%;
    padding: 0.8% 5%;
    color: black;
    background-color: #F27649;

    :hover {
      background-color: darksalmon;
    }
  }
`

