import styled from 'styled-components'

import HeaderBackground from '../assets/img/headerBackground.png'
import HeaderImage from '../assets/img/headerImgComponent.png'

export const HeaderContainer = styled.div`
  max-width: auto;
  height: 616px;
  left: 0px;
  top: 0px;

  background-image: url(${HeaderBackground});
  background-size: cover;
  background-repeat: no-repeat;

  background-color: #5e20a4;

  @media only screen and (max-width: 600px) {
    height: 540px;
    background-position: center;
  }
`

export const HeaderNavBar = styled.div`
  margin: 0 32px 0 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    margin: 0 16px 0 16px;
  }
`
export const LinkHeaderDiv = styled.div`
  display: flex;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
`

export const StyledP = styled.p`
  margin: 0 20px 0 20px;
  align-content: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const ButtonHeaderDiv = styled.div`
  display: flex;
  margin: 16px 32px 0 0;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  @media only screen and (max-width: 600px) {
    margin: 16px 16px 0 0;
  }
`

export const Button = styled.button`
  background: #00a870;
  border-radius: 4px;

  width: 234px;
  height: 44px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #ffffff;
`
export const HeaderMainContent = styled.div`
  margin: 110px 228px 156px 128px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    margin: 80px 16px 80px 16px;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    align-items: center;
  }
`

export const Title = styled.h1`
  width: 490px;

  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #ffffff;

  @media only screen and (max-width: 600px) {
    width: 272px;

    font-size: 28px;
    line-height: 32px;

    text-align: center;
  }
`

export const SubTitle = styled.p`
  width: 584px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;

  color: #ffffff;

  @media only screen and (max-width: 600px) {
    width: 328px;

    font-size: 16px;
    line-height: 28px;

    text-align: center;
  }
`

export const LinkDiv = styled.div`
  display: flex;
  margin-top: 40px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  text-decoration-line: underline;

  color: #ffffff;
`

export const ADiv = styled.div`
  display: flex;
  margin-left: 16px;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;

  a:visited {
    color: #ffffff;
  }
`

export const ImageHeader = styled.div`
  min-width: 316px;
  min-height: 290px;

  background: url(${HeaderImage});
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`
