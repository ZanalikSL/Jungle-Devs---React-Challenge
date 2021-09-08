import styled from 'styled-components'
import ProfileImage from '../assets/img/profileImage.png'

export const ImageBanner = styled.div`
  width: 56px;
  height: 56px;

  padding: 4px;

  background: url(${ProfileImage});

  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
`
export const LinkDiv = styled.div`
  margin: 12px;
  font-size: 16px;

  display: flex;
  align-items: center;

  color: #5e20a4;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`
export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 112px;

  background: #ffffff;

  border: 1px solid #dfdfdf;

  @media only screen and (max-width: 600px) {
    height: 216px;

    flex-direction: column;
  }
`

export const Space = styled.div`
  width: 30px;
`

export const BannerDiv = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
  }
`
