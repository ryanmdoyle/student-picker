import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
width: 100vw;
background: grey;
font-size: 3em;
color: white;
display: flex;
align-items: center;
justify-content: center;
ul {
  list-style-type: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
a {
  padding: 1.25rem 0.5rem;
  font-size: 1.6rem;
  max-width: 140px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: flex-start;
  color: #333;
  &:hover, &:focus {
    background: #ccc;
    color: black;
    svg {
      fill: green; 
    }
    span {
      color: black; 
    }
  }
}
`
const Nav = () => (
  <Navigation>
    <ul>
      <li><a href='/'>View Clases</a></li>
      <li><a href='/add-class'>Add Clases</a></li>
    </ul>
  </Navigation>
)

export default Nav;
