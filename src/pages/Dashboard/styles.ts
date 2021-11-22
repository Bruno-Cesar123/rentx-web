import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
`;

export const Header = styled.header`
  padding: 12px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background: #FFFFFF;
  height: 100px;
  -webkit-box-shadow: 0px 8px 2px #FAFAFA;
  -moz-box-shadow: 0px 8px 2px #FAFAFA;
  box-shadow: 0px 8px 2px #FAFAFA;
`;

export const Content = styled.section`
  max-width: 1200px;
  margin: 70px auto;

  h2 {
    font-size: 28px;
  }

  div {
    display: flex;

    margin-top: 16px;
    padding: 16px;
    width: 100%;
    background: #f2f2f2;
    border-radius: 24px;
  }
`;