import { Container } from 'Components/Helpers/Container/Container';
import animation from '../../../img/hero-animation.svg';
import animation_react from '../../../img/art_react.svg';
import animation_redux from '../../../img/art_redux.svg';
import {
  Accent,
  ButtonAbout,
  Description,
  HeroStyled,
  MajorTitle,
  Wrapper,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroStyled>
      <Container>
        <img
          style={{
            marginLeft: 'auto',
            marginRight: '-125px',
          }}
          src={animation}
          alt="animation"
          width={600}
        />
        <img
          style={{
            position: 'absolute',
            top: '80px',
            left: '0',
            zIndex: '-1',
          }}
          width={230}
          height={230}
          src={animation_react}
          alt="animation"
        />
        <img
          style={{
            position: 'absolute',
            top: '40px',
            left: '260px',
            zIndex: '-1',
          }}
          width={100}
          height={100}
          src={animation_redux}
          alt="animation"
        />
        <Wrapper>
          <MajorTitle>
            Виконуємо роботи
            <Accent> "під ключ"</Accent>
          </MajorTitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            commodi delectus eveniet! Quia explicabo atque similique non ut
            dolorum perspiciatis illum quasi ullam autem, quas dolores!
          </Description>
          <ButtonAbout type="button">Про нас</ButtonAbout>
        </Wrapper>
      </Container>
    </HeroStyled>
  );
};
