import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
function Navbar() {



    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <NavBarContainer>
            <NavItem to="/overview">App Overview</NavItem>
            <NavItem to="/add-app">Add App</NavItem>
            {localStorage.getItem("token") && <NavItem onClick={handleLogout} to="/login">Logout</NavItem>}
            {!localStorage.getItem("token") && <NavItem to="/login">Login</NavItem>}
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