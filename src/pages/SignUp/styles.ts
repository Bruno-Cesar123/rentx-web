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
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  p {
    margin-top: 12px;
    color: #ff4040;
    text-align: left
  }

  .input-error + label {
    color: #ff4040;
  }

  .input-error {
    border-color: #ff4040;
    
    &:focus {
      border: 2px solid #ff4040;
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

  a {
    display: block;
    height: 45px;
    background: #404040;
    color: #FFFFFF;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    margin-top: 16px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media(max-width: 430px) {
    padding: 16px;

    width: 100%;

    button {
      width: 100%;
    }
  }
`;