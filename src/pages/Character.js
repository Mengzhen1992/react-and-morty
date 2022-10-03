import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  CardItem,
  CardImageContainer,
  CardImage,
  CardNameText,
  LinkButton,
  CardTextContainer,
  CardButton,
} from '../components/Card';

export default function Character({ characters, setFavCharacters }) {
  let { userId } = useParams();

  const obj = characters.find((item) => item.id === Number(userId)); /* userId is a string */

  if (obj !== null && obj !== undefined) return <CharacterChildren obj={obj} setFavCharacters={setFavCharacters} />;
}

export function CharacterChildren({ obj, setFavCharacters }) {
  const { id, image, name, status, species, gender, origin, location } = obj;

  const [showDetail, setShowDetail] = useState(true);
  const [isFav, setIsFav] = useState(localStorage.getItem(`is-fav-${id}`) === 'true');

  console.log(`is-fav-${id}`, isFav);

  function handleToggle(id) {
    const currentIsFav = !isFav;
    localStorage.setItem(`is-fav-${id}`, currentIsFav);
    setIsFav(currentIsFav);
    currentIsFav
      ? setFavCharacters((pre) => [...pre, obj])
      : setFavCharacters((pre) => pre.filter((pre) => pre.id !== id));
  }

  const FavButton = styled.button`
    position: absolute;
    top: -1.2em;
    right: -1.2em;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-color: ${isFav ? 'pink' : 'gray'};
    opacity: ${isFav ? '1.0' : '0.3'};
    border: 1px solid ${isFav ? 'pink' : 'gray'};
  `;

  if (obj === undefined || null) return;

  return (
    <CharacterContainer>
      <CardItem id={id}>
        <CardImageContainer>
          <FavButton onClick={() => handleToggle(id)} />
          <CardImage src={image} alt={name} />
        </CardImageContainer>
        {showDetail ? (
          <DetailCardTextContainer>
            <CardNameText>{name}</CardNameText>
            <CardText>status: {status}</CardText>
            <CardText>species: {species}</CardText>
            <CardText>gender: {gender}</CardText>
            <CardText>origin: {origin.name}</CardText>
            <CardText>location: {location.name}</CardText>
            <LinkButton>
              <DetailCardButton onClick={() => setShowDetail(!showDetail)}>Show less</DetailCardButton>
            </LinkButton>
          </DetailCardTextContainer>
        ) : (
          <CardTextContainer>
            <CardNameText>{name}</CardNameText>
            <LinkButton>
              <CardButton onClick={() => setShowDetail(!showDetail)}>Show more</CardButton>
            </LinkButton>
          </CardTextContainer>
        )}
      </CardItem>
    </CharacterContainer>
  );
}

const CharacterContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
`;

const DetailCardTextContainer = styled.div`
  height: 310px;
`;

const CardText = styled.p`
  font-family: var(--card-font);
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  padding: 0px 0 5px 0;
`;

const DetailCardButton = styled.button`
  font-family: var(--card-font);
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  width: 120px;
  margin: 12px auto;
  padding: 3px;
  justify-content: center;
  border: 2px solid grey;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.09);
  background-color: pink;
  text-decoration: none;

  &:hover {
    background-color: hotpink;
  }
`;
