import styled from 'styled-components'
import "./images/Homepage_Background.jpeg"
import "./Homepage.css"
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <div className="Grid">
                <div className="Gradient">
                    <h3 className="InfoHeader">How Appman can help you:</h3>
                    <p className="InfoText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                    <ul className="InfoList">
                        <li className="ListItem">Meet regulatory requirements</li>
                        <li className="ListItem">Centrally manage all your applications</li>
                        <li className="ListItem">Auto-generate tickets for missing documentations</li>
                        <li className="ListItem">Add new apps easily to your environment</li>
                    </ul>
                    <MaterialUiButton component={Link} to={'/overview'} variant="contained">Go to App Overview</MaterialUiButton>
                </div>
            </div>
        </>
    )
}

const MaterialUiButton = styled(Button)`
  && {
    align-self: flex-start;
    margin-top: 5%;
    margin-left: 10%;
    padding: 1% 5%;
    color: black;
    background-color: #F27649;
    :hover {
      background-color: darksalmon;
    }
  }
`