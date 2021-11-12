import styled from "styled-components";
import TextField from "@mui/material/TextField";
import {MenuItem} from "@mui/material";

export default function PageOne({ appData, handleChange } ) {

    const appStatus = [
        {
            value: 'live',
        },
        {
            value: 'terminated',
        },
        {
            value: 'release in progress',
        }
    ];

    return (
        <>
            <MuiTextField value={appData.appName} name="appName" onChange={handleChange} fullWidth label="Application Name" id="appName" />
            <MuiSelectBox
                name="appStatus"
                select
                onChange={handleChange}
                fullWidth
                style={{marginTop: '2%'}}
                id="appStatus"
                label="Application Status"
                value={appData.appStatus}
            >
                {appStatus.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </MuiSelectBox>
            <MuiTextArea
                value={appData.description}
                name="description"
                onChange={handleChange}
                style={{marginTop: '2%'}}
                id="description"
                fullWidth
                label="Description"
                multiline
                rows={4}
            />
        </>
    )


}


const MuiTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#F27649',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#F27649',
        },
    },
});


const MuiTextArea = styled(TextField)({
    '& label.Mui-focused': {
        color: '#F27649',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#F27649',
        },
    },
});

const MuiSelectBox = styled(TextField)({
    '& label.Mui-focused': {
        color: '#F27649',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#F27649',
        },
    },
});