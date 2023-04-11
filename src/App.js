import React from 'react'
import styled from 'styled-components';
import { Test } from '../src/components/test'

const Container = styled.div`
  display : flex;
  background-color : red;
`;

const Div1 = styled.div`
  flex : 5;
`;

const Div2 = styled.div`
  flex : 5;
`;

const Button = styled.button`
  color : green;
`;

export const App = () => {
  return (
    <Container>
    <Div1>
      <Button>Dark Mode</Button>
    </Div1>
    <Div2>
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
    </Div2>
    </Container>
  )
}
