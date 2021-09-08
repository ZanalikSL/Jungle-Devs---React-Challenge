import styled from 'styled-components'

import ComingSoonImage from '../assets/img/imageSection5.png'

export const MainContent = styled.div`
  margin: 96px 0 120px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    margin: 64px 0 64px 0;
  }
`

export const ComingSoon = styled.div`
  min-width: 216px;
  height: 96px;

  background: url(${ComingSoonImage});
  background-repeat: no-repeat;
`

export const TextContent = styled.div`
  margin-top: 40px;

  width: 784px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    margin: 24px 16px 0 16px;
    width: auto;
  }
`

export const TitleTextContent = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;

  color: #3d3d3d;

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    text-align: center;
  }
`

export const BodyTextContent = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;

  text-align: center;

  color: #3d3d3d;
`
