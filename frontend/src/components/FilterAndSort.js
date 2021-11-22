import {BsChevronDown} from "react-icons/bs";
import Collapsible from "react-collapsible";
import styled from "styled-components/macro";
import TextField from "@mui/material/TextField";
import {MenuItem} from "@mui/material";

const handleChange = () => {

}

const appStatus = [
    {
        value: 'all',
    },
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

const docStatus = [
    {
        value: 'all',
    },
    {
        value: '0%',
    },
    {
        value: '20%',
    },
    {
        value: '40%',
    },
    {
        value: '60%',
    },
    {
        value: '80%',
    },
    {
        value: '100%',
    }
];

export default function FilterAndSort() {
    return (
        <Layout>
            <Collapsible trigger={["Filter Apps", < StyledBsChevronDown/>]}>
                <MuiTextField InputLabelProps={{
                    shrink: true,
                }} style={{width: "max-content", marginRight: "10px"}} size={"small"} name="filterById"
                              onChange={handleChange} label="id" id="filterById"/>
                <MuiTextField InputLabelProps={{
                    shrink: true,
                }} style={{width: "max-content", marginRight: "10px"}} size={"small"} name="filterByName"
                              onChange={handleChange} label="application name" id="filterByName"/>
                <MuiSelectBox InputLabelProps={{
                    shrink: true,
                }}
                              style={{width: "10%", marginRight: "10px"}}
                              size="small"
                              name="filterByStatus"
                              select
                              onChange={handleChange}
                              id="filterByStatus"
                              label="application status"
                >
                    {appStatus.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </MuiSelectBox>
                <MuiSelectBox InputLabelProps={{
                    shrink: true,
                }} style={{width: "10%", marginRight: "10px"}} select size={"small"} name="filterByDocumentation"
                              onChange={handleChange} label="documentation status" id="filterByDocumentation">
                    {docStatus.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </MuiSelectBox>
                <MuiTextField InputLabelProps={{
                    shrink: true,
                }} style={{width: "max-content", marginRight: "10px"}} size={"small"} name="filterByBusinessContact"
                              onChange={handleChange} label="business contact" id="filterByBusinessContact"/>
                <MuiTextField InputLabelProps={{
                    shrink: true,
                }} style={{width: "max-content", marginRight: "10px"}} size={"small"} name="filterByTechnicalContact"
                              onChange={handleChange} label="technical contact" id="filterByTechnicalContact"/>
            </Collapsible>
        </Layout>
    )
}

const Layout = styled.div`
  margin: 0 4%;
`

const StyledBsChevronDown = styled(BsChevronDown)`
  padding-left: 5px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 5px;
`

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