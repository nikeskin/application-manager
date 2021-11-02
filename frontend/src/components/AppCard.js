import styled from "styled-components";
import Button from "@mui/material/Button";
import ReadMoreIcon from '@mui/icons-material/ReadMore';

export default function AppCard({ application }) {

    return (
        <CardLayout>
            <p>{application.appName}</p>
            <MoreButton variant="outlined" startIcon={<ReadMoreIcon />}>
                Details
            </MoreButton>
        </CardLayout>

    )

}

const CardLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: repeat(8, 1fr);
  opacity: 120%;
  width: 40%;
  border: 2px solid #F27649;
  background-color: white;
  margin: 1%;
`

const MoreButton = styled(Button)`
    && {
      font-size: large;
      color: black;
      grid-column: 7 / 9;
      grid-row: 1 / 4;
      border-radius: 0;
      border: none;
      :hover {
        border: none;
        background-color: #F27649;
        color: white;
      }
    }
`