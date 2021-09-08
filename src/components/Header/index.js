import SvgBadge from '../assets/iconAssets/Badge'
import SvgPlayButton from '../assets/iconAssets/PlayButton'

import { useExperiment, emitter } from '@marvelapp/react-ab-test'

import {
  HeaderContainer,
  Button,
  ImageHeader,
  HeaderNavBar,
  LinkHeaderDiv,
  ButtonHeaderDiv,
  StyledP,
  HeaderMainContent,
  MainContent,
  Title,
  SubTitle,
  LinkDiv,
  ADiv,
} from './styled'

emitter.defineVariants('Jungle Devs', ['A', 'B'])

export const Header = () => {
  const { selectVariant } = useExperiment('Jungle Devs')

  const variant = selectVariant({
    A: (
      <div>
        <Title>Easily create or join a local nanny share with Hapu</Title>
        <SubTitle>
          Hapu is Airbnb for nanny share. Share your home, nanny and costs and
          create new flexible, affordable solutions in childcare.
        </SubTitle>
      </div>
    ),
    B: (
      <div>
        <Title>Create the childcare you need at a price you can afford</Title>
        <SubTitle>
          Connect with other local families to share a nanny from as low as
          $10.00/hr each. Create your family profile today to get started.
        </SubTitle>
      </div>
    ),
  })

  return (
    <HeaderContainer>
      <HeaderNavBar>
        <LinkHeaderDiv>
          <SvgBadge />
          <StyledP>
            <p>Create Your Nanny Share</p>
          </StyledP>
          <StyledP>
            <p>Browse Shares</p>
          </StyledP>
          <StyledP>
            <p>Our Story</p>
          </StyledP>
        </LinkHeaderDiv>
        <ButtonHeaderDiv>
          <Button>Become a Nanny Share Host</Button>
          <StyledP>
            <p>Sign In</p>
          </StyledP>
        </ButtonHeaderDiv>
      </HeaderNavBar>

      <HeaderMainContent>
        <MainContent>
          {variant}
          <LinkDiv>
            <SvgPlayButton />
            <ADiv>
              <a href="">See hapu in action (27 seconds)</a>
            </ADiv>
          </LinkDiv>
        </MainContent>
        <ImageHeader />
      </HeaderMainContent>
    </HeaderContainer>
  )
}
