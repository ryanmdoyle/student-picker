import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const Button = styled.button`
  font-size: 1rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;
  color: green;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
`;

class App extends Component {
  state = {
    classes: []
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className='inner'>
          <p>It's working!</p>
          <ul>
            <li>Student 1</li>
            <li>Student 2</li>
            <li>Student 3</li>
            <li>Student 4</li>
          </ul>
          <Button onClick={() => this.props.updateState()}>I'm a button!</Button>
        </div>
      </div>
    );
  }
}

export default App;
