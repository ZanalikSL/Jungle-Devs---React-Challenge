import {
  ImageBillingHistory,
  MainContent,
  TextContent,
  TitleTextContent,
  BodyTextContent,
  LinkContent
} from './styled'

export const FrameworkSection = () => {
  return (
    <MainContent>
      <TextContent>
        <TitleTextContent>A framework built for the long term</TitleTextContent>
        <BodyTextContent>
          Childcare is for the long term. And you need a framework you can count
          on that gives your share long term viability and success. That’s why
          we’ve defined Hapu around our three tribal principles; clearly defined
          process, transparency over money and equality of participation.
        </BodyTextContent>
        <LinkContent>
          <a href="">Read how Hapu’s tribal background defines our app </a>
        </LinkContent>
      </TextContent>
      <ImageBillingHistory />
    </MainContent>
  )
}
