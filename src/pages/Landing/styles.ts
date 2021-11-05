import styled from 'styled-components';

import landingImg from '../../assets/landing.png';

export const Container = styled.main`
  height: 100vh;

  background-image: url(${landingImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;
  /* width: 100%; */
`;

export const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  div {
    margin-top: 220px;
    width: 576px;
    padding: 0 8px;

    h1 {
      font-size: 56px;
      color: #ffffff;
      font-weight: 700;
    }

    a {
      width: 240px;
      height: 64px;
      background: #FF1010;
      color: #ffffff;
      margin-top: 24px;
      font-size: 26px;
      font-weight: 400;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    @media(max-width: 576px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      
    }
  }
`;

export const Header = styled.header`
  padding: 12px 8px;

  @media(max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;