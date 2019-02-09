import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  padding: 0.25rem 1rem;
  :hover {
    background: black;
    color: white;
  }
`;

export default Button;