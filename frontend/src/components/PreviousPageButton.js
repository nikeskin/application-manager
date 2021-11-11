import Button from "@mui/material/Button";
import styled from "styled-components";

export default function PreviousPageButton({ setErrorMessage, formNumber, setFormNumber }) {

    const decreaseFormNumber = (event) => {
        event.preventDefault();
        setErrorMessage("");
        const newFormNumber = formNumber-1;
        setFormNumber(newFormNumber);
    }


    return (

        <MuiButton onClick={decreaseFormNumber}>Back</MuiButton>

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

