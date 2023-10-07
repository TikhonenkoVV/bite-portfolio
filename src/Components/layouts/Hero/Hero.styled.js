import styled from '@emotion/styled';
import bgr from '../../../img/hero.png';

export const HeroStyled = styled.section`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
  height: 700px;
  background-image: url(${bgr});
  background-repeat: no-repeat;
  background-size: 1280px;
  background-position: top;
  padding-top: 85px;
`;

export const Wrapper = styled.div`
  margin-top: -100px;
  margin-left: 100px;
  background-color: #282c33;
  width: 450px;
  padding: 24px;
  border: 3px solid #fff;
  border-top-width: 30px;
  border-radius: 10px;
  box-shadow: 21px 21px 62px -4px #00000043;
`;

export const MajorTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 40px;
  font-weight: 400;
`;

export const Accent = styled.span`
  color: orange;
`;

export const Description = styled.p`
  margin-bottom: 16px;
`;

export const ButtonAbout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 48px;
  margin-left: auto;
  text-transform: uppercase;
  font-weight: 600;
  border: 3px solid #fff;
  border-radius: 24px;
  transition: background-color 250ms, color 250ms;
  &:hover {
    background-color: orange;
    color: #282c33;
  }
`;
