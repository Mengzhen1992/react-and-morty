import { CharacterChildren } from './Character';
import styled from 'styled-components';

export default function Favorites({ favCharachters, setFavCharacters }) {
  // 1. find favorite array

  console.log(favCharachters);
  // 2. array -> create n <Character/>
  if (favCharachters.length === 0) return <FavText>There is no charater. Please add your favorite character!</FavText>;
  return (
    <FavCardContainer>
      {favCharachters.map((item) => (
        <CharacterChildren key={item.id} obj={item} setFavCharacters={setFavCharacters} />
      ))}
    </FavCardContainer>
  );
}

const FavCardContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 50px;
`;

const FavText = styled.p`
  text-align: center;
  font-family: var(--card-font);
  font-size: 2rem;
  margin-top: 20px;
`;
