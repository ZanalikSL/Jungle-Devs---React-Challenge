import SvgFacebook from '../assets/iconAssets/Facebook'
import SvgInstagram from '../assets/iconAssets/Instagram'
import SvgLogo from '../assets/iconAssets/Logo'
import SvgTwitter from '../assets/iconAssets/Twitter'
import SvgUnion from '../assets/iconAssets/Union'

import {
  MainContent,
  Button,
  ButtonBody,
  MainTextContent,
  TitleTextContent,
  TextContent,
  LinkContent,
  ButtonText,
  FooterContent,
  LinksContent,
  NavLink,
  SvgDiv,
  Copyright,
} from './styled'

export const Footer = () => {
  return (
    <MainContent>
      <MainTextContent>
        <TitleTextContent>Become a nanny share host</TitleTextContent>
        <TextContent>Takes less than 5 minutes to get started</TextContent>
        <Button>
          <SvgUnion />
          <div>
            <ButtonBody>Create Your Nanny Share</ButtonBody>
            <ButtonText>Takes less than 5 minutes</ButtonText>
          </div>
        </Button>
        <LinkContent>
          <a href="">Or browse local nanny-shares</a>
        </LinkContent>
      </MainTextContent>
      <FooterContent>
        <SvgLogo />
        <LinksContent>
          <NavLink>Share Your Nanny</NavLink>
          <NavLink>Our Story</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Terms & Privacy</NavLink>
        </LinksContent>
        <SvgDiv>
          <SvgFacebook />
          <SvgTwitter />
          <SvgInstagram />
        </SvgDiv>
      </FooterContent>
      <Copyright>
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </Copyright>
    </MainContent>
  )
}
