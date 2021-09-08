import {
  ImageSection,
  MainContent,
  TextContent,
  StyledP,
  StyledLink,
  StyledH2,
} from './styled'

export const ShareYourHome = () => {
  return (
    <MainContent>
      <TextContent>
        <StyledH2>
          <>Share your home, nanny and costs</>
        </StyledH2>
        <StyledP>
          You have a fantastic home, a fantastic nanny and wouldn’t cutting your
          costs in half be, well, fantastic?! If only it was easy to connect
          with other parents to share your costs? Well now it is, with Hapu.{' '}
          <a href="">Hapu means tribe</a> and it’s our foundational 3 tribal
          principles that empowers you to create and manage your own tribe. A
          tribe that together has the power to create new affordable solutions
          in childcare that work for you and your community.
        </StyledP>
        <StyledLink>
          <a href="">Ready to get started?</a>
        </StyledLink>
      </TextContent>
      <ImageSection />
    </MainContent>
  )
}
