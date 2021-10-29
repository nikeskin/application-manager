import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
function Navbar() {
    return (
        <NavBarContainer>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/overview">App Overview</NavItem>
            <NavItem to="/add-application">Add App</NavItem>
        </NavBarContainer>
    )
}
export default Navbar

const NavBarContainer = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 40px;
`
const NavItem = styled(NavLink)`
  color: #F27649;
  :hover {
    color: black;
  }
`