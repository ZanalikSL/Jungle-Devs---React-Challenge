import styled from 'styled-components'

import SharedPaymentImage from '../assets/img/imageSection3.png'

export const ImagePayment = styled.div`
  min-width: 456px;
  height: 336px;

  background: url(${SharedPaymentImage});

  @media only screen and (max-width: 600px) {
    min-width: 312px;
    width: 312px;
    height: 230px;

    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const MainContent = styled.div`
  margin: 96px 0 96px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin: 64px 0 64px 0;

    flex-direction: column;
    align-items: center;
  }
`

export const TextContent = styled.div`
  margin-left: 44px;
  width: 484px;

  @media only screen and (max-width: 600px) {
    margin-left: 0;
    width: 328px;
  }
`

export const TitleTextContent = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;

  display: flex;
  align-items: center;

  color: #3d3d3d;

  @media only screen and (max-width: 600px) {
    margin-top: 40px;
    font-size: 22px;
    text-align: center;
  }
`

export const BodyTextContent = styled.p`
  margin: 40px 0 40px 0;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;

  color: #3d3d3d;

  @media only screen and (max-width: 600px) {
    margin: 16px 0 24px 0;

    text-align: center;
  }
`

export const LinkContent = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #5e20a4;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`
