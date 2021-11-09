import Button from "@mui/material/Button";
import styled from "styled-components";

export default function FinalSubmitButton() {

    const log = () => {
        console.log("submitted")
    }

    return (

        <MuiButton onClick={log}>Submit</MuiButton>

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