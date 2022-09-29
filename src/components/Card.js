import styled from 'styled-components';

export default function Card() {
  return (
    <section>
      <ul>
        <CardItem>
          <CardImageContainer>
            <CardImage
              src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
              alt="Morty Smith"
            />
          </CardImageContainer>
          <CardTextContainer>
            <CardText>Morty Smith</CardText>
          </CardTextContainer>
        </CardItem>
      </ul>
    </section>
  );
}

const CardItem = styled.li`
  width: 300px;
  margin: 10px auto;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const CardImageContainer = styled.div`
  height: 300px;
`;

const CardImage = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const CardTextContainer = styled.div`
  height: 120px;
`;

const CardText = styled.h2`
  font-family: var(--card-font);
  font-size: 2rem;
  text-align: center;
  padding: 10px 0;
`;
