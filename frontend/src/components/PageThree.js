import styled from "styled-components";
import TextField from "@mui/material/TextField";

export default function PageThree({handleChange, appData}) {

    return (
        <>
            <MuiTextField
                name="conceptOfRolesAndRights"
                onChange={handleChange}
                fullWidth
                label="Concept of Roles and Rights"
                id="conceptOfRolesAndRights"/>
            <MuiTextField
                name="supplierContract"
                onChange={handleChange}
                style={{marginTop: '2%'}}
                fullWidth
                label="Supplier Contract"
                id="supplierContract"/>
            <MuiTextField
                name="technicalDesignConcept"
                onChange={handleChange}
                style={{marginTop: '2%'}}
                fullWidth
                label="Technical Design Concept"
                id="technicalDesignConcept"/>
            <MuiTextField
                name="testingConcept"
                onChange={handleChange}
                style={{marginTop: '2%'}}
                fullWidth
                label="Testing Concept"
                id="testingConcept"/>
            <MuiTextField
                name="userHandbook"
                onChange={handleChange}
                style={{marginTop: '2%'}}
                fullWidth
                label="User Handbook"
                id="userHandbook"/>
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