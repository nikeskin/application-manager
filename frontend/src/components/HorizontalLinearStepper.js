import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from "styled-components";

const steps = ['General Info', 'Contacts', 'Documentation'];

export default function HorizontalLinearStepper( { formNumber }) {

            return (
                <Wrapper>
                    <Box style={{padding: "1% 5% 5% 5%"}} sx={{ width: '90%' }}>
                        <Stepper activeStep={formNumber-1}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <MuiStepLabel {...labelProps}>{label}</MuiStepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </Box>
                </Wrapper>
    );
}


const MuiStepLabel = styled(StepLabel)({
    '& label.Mui-active': {
        color: '#F27649',
    }

})

const Wrapper = styled.div`
  
`