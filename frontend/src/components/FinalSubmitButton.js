import Button from "@mui/material/Button";
import styled from "styled-components";
import {addApp, editApp} from "../service/backendApi";
import {useHistory} from "react-router-dom";

export default function FinalSubmitButton({ appData }) {

    const history = useHistory();

        console.log(appData.id)

    const handleClick = () => {
        if (appData.id === undefined) {
            addApp(appData)
                .then(() => history.push("/overview"))
                .catch(console.error);
        } else {
            editApp(appData, appData.id)
                .then(() => history.push("/overview"))
                .catch(console.error);
        }
    }

    return (
        <MuiButton onClick={handleClick}>{appData.id === undefined ? "Submit" : "Submit changes"}</MuiButton>
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