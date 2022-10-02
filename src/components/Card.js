import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Card({ characters }) {
  return (
    <section>
      <CardContainer>
        {characters.map(({ name, image, id }, index) => (
          <CardItem key={index} id={id}>
            <CardImageContainer>
              <CardImage src={image} alt={name} />
            </CardImageContainer>
            <CardTextContainer>
              <CardNameText>{name}</CardNameText>
              <LinkButton to={`details/${id}`}>
                <CardButton>Show more</CardButton>
              </LinkButton>
            </CardTextContainer>
          </CardItem>
        ))}
      </CardContainer>
    </section>
  );
}

export const CardContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  margin: 10px 100px 80px 100px;
`;

export const CardItem = styled.li`
  width: 300px;
  margin: 10px auto;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const CardImageContainer = styled.div`
  height: 300px;
`;

export const CardImage = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const CardTextContainer = styled.div`
  height: 135px;
`;

export const CardNameText = styled.h2`
  font-family: var(--card-font);
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  padding: 15px 0;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
`;

export const CardButton = styled.button`
  font-family: var(--card-font);
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  width: 120px;
  margin: 0 auto;
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
