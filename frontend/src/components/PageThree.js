import styled from "styled-components";
import TextField from "@mui/material/TextField";

export default function PageThree() {


    return (
        <>
            <MuiTextField fullWidth label="Application Status" id="appStatus" />
            <MuiTextField style={{marginTop: '2%'}} fullWidth label="Technical Contact" id="technicalContact" />
        </>

    )


}


const MuiTextField = styled(TextField)(
    {
        '& label.Mui-focused': {
            color: '#F27649',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#F27649',
            },
        },
    });