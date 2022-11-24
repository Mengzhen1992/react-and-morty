import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <NavItem>
      <NavItemList>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/random">Random</Link>
        </ListItem>
        <ListItem>
          <Link to="/favorites">Favorites</Link>
        </ListItem>
      </NavItemList>
    </NavItem>
  );
}

const NavItem = styled.nav`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: pink;
`;

const NavItemList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  width: 100%;
  border-top: 2px solid gray;
`;

const ListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: var(--title-font);
  font-size: 1.5rem;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 10px 0;

  &:hover {
    color: hotpink;
  }
`;
