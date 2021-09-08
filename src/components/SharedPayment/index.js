import {
  ImagePayment,
  MainContent,
  TextContent,
  BodyTextContent,
  TitleTextContent,
  LinkContent,
} from './styled'

export const SharedPayment = () => {
  return (
    <MainContent>
      <ImagePayment />
      <TextContent>
        <TitleTextContent>Shared payments made simple</TitleTextContent>
        <BodyTextContent>
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing
          that bill week in, week out and you might encounter more than a few
          snares. But not with Hapu. Simply set your rates and our automated
          payment system takes care of the rest. You need never talk money or
          who owes what.
        </BodyTextContent>
        <LinkContent>
          <a href="">Read how Bridget’s share (without Hapu) ended over $15</a>
        </LinkContent>
      </TextContent>
    </MainContent>
  )
}
