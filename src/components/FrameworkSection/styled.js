import styled from 'styled-components'

import BillingHistory from '../assets/img/imageSection4.png'

export const MainContent = styled.div`
  margin: 96px 0 96px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin: 64px 0 64px 0;
  }
`
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 784px;

  @media only screen and (max-width: 600px) {
    margin: 0 16px 0 16px;
  }
`

export const TitleTextContent = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #3d3d3d;

  @media only screen and (max-width: 600px) {
    font-size: 22px;
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

export const LinkContent = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-align: center;
  
  color: #5e20a4;
`

export const ImageBillingHistory = styled.div`
  margin-top: 64px;
  min-width: 984px;
  min-height: 392px;

  background: url(${BillingHistory});
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`
