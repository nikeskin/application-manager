import Button from "@mui/material/Button";
import styled from "styled-components";
import {addApp} from "../service/backendApi";
import {useHistory} from "react-router-dom";

export default function FinalSubmitButton({ appData }) {

    const history = useHistory();


    const handleClick = () => {
        addApp(appData)
            .then(() => history.push("/overview"))
            .catch(console.error);
    }

    return (
        <MuiButton onClick={handleClick}>Submit</MuiButton>
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