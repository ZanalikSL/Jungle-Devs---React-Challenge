import {
  BannerContainer,
  BannerDiv,
  ImageBanner,
  Space,
  LinkDiv,
} from './styled'

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerDiv>
        <ImageBanner />
        <Space />
        <LinkDiv>
          <a href="">Sarah’s day care available now in North Sydney</a>
        </LinkDiv>
        <h4>Wednesday, Thursday, Friday - 7:30 - 5:30</h4>
      </BannerDiv>
    </BannerContainer>
  )
}
