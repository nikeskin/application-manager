import styled from "styled-components";
import TextField from "@mui/material/TextField";

export default function PageTwo() {


    return (
        <>
            <MuiTextField fullWidth label="Business Contact" id="businessContact" />
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