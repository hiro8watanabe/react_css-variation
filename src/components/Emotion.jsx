/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

export const Emotion = () => {
  const containerStyle = css`
    border: 2px solid #333;
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: '0',
    color: '#333',
    fontWeight: 'bold'
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!</SButton>
    </div>
  );
};

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
