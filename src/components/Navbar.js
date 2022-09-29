import styled from 'styled-components';

export default function Navbar() {
  return (
    <NavItem>
      <NavItemList>
        <ListItem>
          <Link href="https://rickandmortyapi.com/api/character/avatar/2.jpeg">
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://rickandmortyapi.com/api/character/avatar/2.jpeg">
            Random
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://rickandmortyapi.com/api/character/avatar/2.jpeg">
            Favorites
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://rickandmortyapi.com/api/character/avatar/2.jpeg">
            Get creative
          </Link>
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

const Link = styled.a`
  text-decoration: none;
  color: black;
  padding: 10px 0;

  &:hover {
    color: hotpink;
  }
`;
