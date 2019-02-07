import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <p>It's working!</p>
        <ul>
          <li>Student 1</li>
          <li>Student 2</li>
          <li>Student 3</li>
          <li>Student 4</li>
        </ul>
        <Button>I'm a button!</Button>
      </div>
    );
  }
}

export default App;
