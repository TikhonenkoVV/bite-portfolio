import styled from '@emotion/styled';

export const ContainerStyled = styled.div`
  position: relative;
  width: 320px;
  margin: 0 auto;
  padding: 0 24px;
  @media screen and (min-width: 414px) {
    width: 414px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const HeaderContainer = styled(ContainerStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
