import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  img {
    width: 240px;
    height: 80px;
    margin-top: 80px;
  }
`;

export const Form = styled.form`
  margin-top: 36px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
    font-weight: 400;
  }

  label {
    display: flex;
    justify-content: start;
    margin-top: 16px;
  }

  input {
    margin-top: 12px;
    width: 390px;
    height: 45px;
    padding: 16px;
    color: #404040;

    background: #FAF9F9;
    border: 1px solid #404040;
    border-radius: 16px;
  }

  div {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a {
      color: #404040;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  button {
    margin-top: 16px;
    width: 390px;
    height: 45px;
    background: #FF1010;
    border-radius: 16px;
    cursor: pointer;
    border: none;
    color: #FFFFFF;
    font-size: 18px;
    letter-spacing: 2px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;