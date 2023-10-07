import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  padding: 20px 0;
  background-color: #0b0d12;
`;
export const Anchors = styled.ul`
  display: flex;
  gap: 24px;
`;

export const Anchor = styled.a`
  transition: color 250ms;
  &.phone {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  &:hover {
    color: orange;
  }
  &:hover svg {
    fill: orange;
  }
`;

export const Phone = styled.div``;
