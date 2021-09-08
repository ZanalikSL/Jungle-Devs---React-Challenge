import {
  MainContent,
  ComingSoon,
  TextContent,
  TitleTextContent,
  BodyTextContent
} from './styled'

export const ComingSoonSection = () => {
  return (
    <MainContent>
      <ComingSoon />
      <TextContent>
        <TitleTextContent>
          Coming soon: Nanny Share Daily Diary!
        </TitleTextContent>
        <BodyTextContent>
          With the Hapu daily diary your nanny will be able to update you and
          your sharers with photos and commentary of the day. You and sharers
          will receive notifications and you’ll be able to login to view the
          daily adventures fo your little ones. We can’t wait!
        </BodyTextContent>
      </TextContent>
    </MainContent>
  )
}
