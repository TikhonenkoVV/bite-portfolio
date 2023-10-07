import sprite from '../img/sprite.svg';
import { SvgStyled } from './Logo.styled';
export const Logo = () => {
  return (
    <SvgStyled width={136} height={40}>
      <use href={`${sprite}#icon-logo`}></use>
    </SvgStyled>
  );
};
