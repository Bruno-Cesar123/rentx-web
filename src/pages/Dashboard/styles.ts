import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 12px 8px;
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

export const Card = styled.div`
  margin-top: 70px;
  width: 384px;
  height: 440px;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  background: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);

  img {
    margin-top: 12px;
    width: 344px;
    height: 185px;
  }

  h3 {
    font-size: 24px;
    margin-top: 12px;
  }

  p {
    margin-top: 12px;
  }

  a {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 220px;
    height: 45px;
    background: #FF1010;
    color: #FFFFFF;

    border-radius: 16px;
    font-size: 18px;
    letter-spacing: 2px;
    cursor: pointer;
      
    text-decoration: none;
      
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Content = styled.section`
  margin-top: 70px;
  position: relative;

  h2 {
    font-size: 28px;
  }
`;

export const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  main {
    position: absolute;
    width: 800px;
    height: 430px;
    
    display: flex;
    flex-direction: column;

    margin: 0 160px;
    background: #FFFFFF;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);

    div {
      h3 {
        margin-top: 16px;
        font-size: 28px;
        text-align: center;
      }

      p {
        font-size: 20px;
        margin-top: 8px;
        margin-left: 12px;
      }
    }
  }
`;