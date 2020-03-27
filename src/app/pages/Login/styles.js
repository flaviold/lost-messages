import styled from 'styled-components';

export const Container = styled.div`
  background: #058ED9;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Quattrocento Sans', cursive;

  &>svg {
    fill: #fff;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

export const LoginContainer = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 10px;
  display:flex;
  justify-content:center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  input {
    padding: 5px 15px 5px 10px;
    border: none;
    color: #999;
    border-bottom: 1px solid #999;
    width: 80%;
    font-size: 1.15rem;
    font-family: 'Quattrocento Sans', cursive;

    &::placeholder {
      color: #999;
    }

    &:focus {
      outline-color: transparent;
      border: none;
      color: #058ED9;
      border-bottom: 1px solid #058ED9;
    }

    &:focus::placeholder {
      color: #058ED9
    }

    & + svg {
      margin-left: -15px;
      width:1rem;
      height:.8rem;
      color: #999;
    }

    &:focus + svg {
      color: #058ED9;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width:100px;
    margin: 0 auto;
    color: red;
  }
`;

export const LoginButton = styled.button`
  background: none;
  margin: 15px auto 0 auto;
  border: 1.5px solid #058ED9;
  color: #058ED9;
  border-radius: 10px;
  padding: 10px;
  width: 80%;
  font-size: 1.15rem;
  cursor: pointer;
  transition: all .2s;
  font-family: 'Quattrocento Sans', cursive;

  &:hover {
    color: #fff;
    background: #058ED9;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;