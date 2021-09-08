import styled from 'styled-components'

import ImageSection1 from '../assets/img/imageSection1.png'

export const MainContent = styled.div`
  margin: 120px 0 120px 0;

  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin: 64px 0 64px 0;
    flex-direction: column;
    align-items: center;
  }
`

export const TextContent = styled.div`
  width: 444px;

  @media only screen and (max-width: 600px) {
    width: 328px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

export const StyledH2 = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;

  color: #3d3d3d;

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    line-height: 32px;

    text-align: center;
  }
`
export const StyledP = styled.div`
  margin: 40px 0 40px 0;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;

  color: #4a4a4a;

  @media only screen and (max-width: 600px) {
    margin: 16px 0 24px 0;

    text-align: center;

    color: #3d3d3d;
  }
`

export const StyledLink = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #5e20a4;
`
export const ImageSection = styled.div`
  margin: 0 0 0 56px;
  min-width: 584px;
  height: 392px;

  background-repeat: no-repeat;

  background-image: url(${ImageSection1});

  @media only screen and (max-width: 600px) {
    margin: 0 0 24px 0;

    min-width: 304px;
    max-height: 204px;

    background-size: cover;
    background-position: center;

    order: -1;
  }
`
