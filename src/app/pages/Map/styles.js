import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`
  color: #fff;
  font-family: 'Quattrocento Sans', cursive;
  /* display: flex;
  flex-direction: column; */

  .map {
    top: 0px;
    z-index: -1;
  }
`;

export const Header = styled.header`
  background: #058ED9;
  height: 50px;
  display: flex;
  align-items: center;

  &>svg {
    fill: #fff;
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
`;

export const Title = styled.h1`
  margin: 0 auto;
`;

export const AddButton = styled.button`
  font-size: 2.2rem;
  background: #058ED9;
  color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${darken(.05, '#058ED9')}
  }
`;