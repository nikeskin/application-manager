import styled from "styled-components";
import TextField from "@mui/material/TextField";

export default function PageTwo({appData, handleChange} ) {

    return (
        <>
            <MuiTextField
                onChange={handleChange}
                value={appData.businessContact}
                name="businessContact"
                fullWidth
                label="Business Contact"
                id="businessContact" />
            <MuiTextField
                onChange={handleChange}
                value={appData.technicalContact}
                name="technicalContact"
                style={{marginTop: '2%'}}
                fullWidth
                label="Technical Contact"
                id="technicalContact" />
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