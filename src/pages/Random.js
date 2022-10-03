import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CharacterCard } from '../components/Card';
import { useState } from 'react';

export default function Random({ characters }) {
  const [id, setId] = useState(null);

  function handleRandomCharacter() {
    let randomId = Math.floor(Math.random() * 19);
    console.log(characters[0]);
    setId(randomId);
  }

  return (
    <section>
      {id === null ? (
        <RandomCardItem>
          <FontAwesomeIcon icon="fa-solid fa-question" />
        </RandomCardItem>
      ) : (
        <CharacterCard item={characters[id]} />
      )}
      <RandomCardButton onClick={handleRandomCharacter}>Get Random Character</RandomCardButton>
    </section>
  );
}

const RandomCardItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14rem;
  width: 300px;
  height: 435px;
  margin: 10px auto;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const RandomCardButton = styled.button`
  font-family: var(--card-font);
  font-size: 2.4rem;
  font-weight: 700;
  display: flex;
  width: 300px;
  margin: 40px auto;
  padding: 3px;
  justify-content: center;
  border: 2px solid grey;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.09);
  background-color: pink;
`;
