import styled from 'styled-components';
const gray = '#cccccc';

export const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: solid 1px ${gray};
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Value = styled.h2`
  font-size: 40px;
  font-weight: 100;
  margin: 0;
  padding: 0;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  paddin: 0;
  color: ${gray};
`;
