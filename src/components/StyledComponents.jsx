import styled from 'styled-components';

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: 2px solid #333;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #333;
  font-weight: bold;
`;

const SButton = styled.button`
  border: 0;
  border-radius: 8px;
  background-color: blue;
  padding: 8px;
  color: #fff;
  transition: 0.3s;
  &:hover {
    background-color: #abedd8;
    cursor: pointer;
  }
`;
