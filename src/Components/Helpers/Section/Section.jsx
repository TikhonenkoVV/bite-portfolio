import { SectionStyled } from './Section.styled';

export const Section = ({ children }) => {
  return <SectionStyled style>{children}</SectionStyled>;
};
