import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`
  color: #fff;
  font-family: 'Quattrocento Sans', cursive;
  display: flex;
  flex-direction: column;

  #map {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
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
  font-size: 2rem;
  background: #eee;
  color: #333;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);

  &:hover {
    color: ${darken(.05, '#333')}
  }
  &:focus, &:active {
    outline: none !important;
    box-shadow: none !important;
    background-color: white !important;
  }
`;

export const CurrentPositionButton = styled.button`
  font-size: 2rem;
  background: #eee;
  color: ${props => props.active ? '#058ED9' : '#333'};
  cursor: pointer;
  position: absolute;
  bottom: 80px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);

  &:hover {
    color: ${props => darken(.05, `${props.active ? '#058ED9' : '#333'}`)}
  }
  &:focus, &:active {
    outline: none !important;
    box-shadow: none !important;
    background-color: white !important;
  }
`;