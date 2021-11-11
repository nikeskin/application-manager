import styled from "styled-components";
import TextField from "@mui/material/TextField";

export default function PageThree({handleChange, appData}) {

    return (
        <>
            <MuiTextField
                value={appData.documentation.conceptOfRolesAndRights}
                name="conceptOfRolesAndRights"
                onChange={handleChange}
                fullWidth
                label="Concept of Roles and Rights"
                id="conceptOfRolesAndRights"/>
            <MuiTextField
                value={appData.documentation.supplierContract}
                name="supplierContract"
                onChange={handleChange}
                style={{marginTop: '2%'}}
                fullWidth
                label="Supplier Contract"
                id="supplierContract"/>
            <MuiTextField
                value={appData.documentation.technicalDesignConcept}
                name="technicalDesignConcept"
                onChange={handleChange}
                style={{marginTop: '2%'}}
                fullWidth
                label="Technical Design Concept"
                id="technicalDesignConcept"/>
            <MuiTextField
                value={appData.documentation.testingConcept}
                name="testingConcept"
                onChange={handleChange}
                style={{marginTop: '2%'}}
                fullWidth
                label="Testing Concept"
                id="testingConcept"/>
            <MuiTextField
                value={appData.documentation.userHandbook}
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