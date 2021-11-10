import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from "styled-components";
import { createTheme } from "@mui/material";

const steps = ['General Info', 'Contacts', 'Documentation'];

const theme = createTheme({
    overrides: {
        MuiStepIcon: {
            root: {
                '&$completed': {
                    color: 'pink',
                },
                '&$active': {
                    color: 'red',
                },
            },
            active: {},
            completed: {},
        }
    }});

export default function HorizontalLinearStepper( { formNumber }) {

            return (
        <Box style={{padding: "1% 5% 5% 5%"}} sx={{ width: '90%' }}>
            <Stepper activeStep={formNumber-1}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <MuiStepLabel theme={theme} {...labelProps}>{label}</MuiStepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}


const MuiStepLabel = styled(StepLabel)({
    '& label.Mui-active': {
        color: '#F27649',
    }
})