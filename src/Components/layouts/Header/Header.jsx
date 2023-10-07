import { Logo } from 'Components/Logo';
import { Anchor, Anchors, HeaderStyled, Phone } from './Header.styled';
import { HeaderContainer } from 'Components/Helpers/Container/Container.styled';
import sprite from '../../../img/sprite.svg';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo />
        <nav>
          <Anchors>
            <li>
              <Anchor href="#id">Про нас</Anchor>
            </li>
            <li>
              <Anchor href="#id">Послуги</Anchor>
            </li>
            <li>
              <Anchor href="#id">Проекти</Anchor>
            </li>
            <li>
              <Anchor href="#id">Контакти</Anchor>
            </li>
          </Anchors>
        </nav>
        <Phone>
          <Anchor className="phone" href="tel:+380970000000">
            <svg
              style={{ transition: 'fill 250ms' }}
              width={24}
              height={24}
              fill="#fff"
            >
              <use href={`${sprite}#icon-phone`}></use>
            </svg>
            +38 (097) 000 00 00
          </Anchor>
        </Phone>
      </HeaderContainer>
    </HeaderStyled>
  );
};
