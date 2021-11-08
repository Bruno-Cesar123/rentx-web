import styled from "styled-components";

interface InputProps {
  invalid: boolean;
}

export const Container = styled.div<InputProps>`
  position: relative;
  height: 48px;
  margin-top: 16px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${p => p.invalid ? '#ff4040' : '#404040'};
    color: #404040;
    font-size: 18px;
    border-radius: 8px;
    outline: none;
    padding: 16px;
    background: none;
    z-index: 1;

    &::placeholder {
      color: transparent;
    }

    &:focus {
      border: solid ${p => p.invalid ? '#ff4040' : '#404040'};
    }

    &:focus + label {
      top: -8px;
      left: 12.8px;
      z-index: 10;
      color: ${p => p.invalid ? '#ff4040' : '#404040'};
    }

    &:not(:placeholder-shown) + label {
      top: -8px;
      left: 12.8px;
      z-index: 10;
      font-size: 16px;
    }
  }

  label {
    position: absolute;
    left: 16px;
    top: 16px;
    padding: 0 4px;
    background: #FFFFFF;
    color: ${p => p.invalid ? '#ff4040' : '#404040'};
    font-weight: 500;
    transition: 0.2s;
  }
`;