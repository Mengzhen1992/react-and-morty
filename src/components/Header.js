import styled from 'styled-components';

export default function Header() {
  return (
    <header>
      <Titel>React and Morty</Titel>
    </header>
  );
}

const Titel = styled.h1`
  font-family: var(--title-font);
  font-size: 3rem;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;
  border-bottom: 2px solid gray;
`;
