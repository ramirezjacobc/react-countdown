import React from 'react';
import {
  Wrapper,
  Value,
  Title,
} from './styledComponents';

const Item = ({value, title}) => {
  return (
    <Wrapper>
      <Value>{ value }</Value>
      <Title>{ title }</Title>
    </Wrapper>
  );
};

export default Item;
