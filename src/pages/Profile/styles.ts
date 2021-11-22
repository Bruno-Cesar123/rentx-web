import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 12px 36px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  background: #FFFFFF;
  height: 100px;
  -webkit-box-shadow: 0px 8px 2px #FAFAFA;
  -moz-box-shadow: 0px 8px 2px #FAFAFA;
  box-shadow: 0px 8px 2px #FAFAFA;

  a {
    text-decoration: none;
    color: #404040;

    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    margin-top: 24px;
    padding: 32px;

    label {
      margin-top: 12px;
      font-size: 18px;
    }

    input {
      margin-top: 12px;
      width: 100%;
      height: 40px;
      font-size: 18px;
      padding: 16px;
      border-radius: 16px;
      border: solid 1px solid #404040;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #404040;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #555;
    }
    &:hover {
      opacity: 0.9;
    }
  }
`;