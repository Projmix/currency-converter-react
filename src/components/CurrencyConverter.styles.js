import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const FieldContainer = styled.div`
  margin: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;
