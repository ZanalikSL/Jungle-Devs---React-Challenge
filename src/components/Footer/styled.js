import styled from 'styled-components'

export const MainContent = styled.div`
  height: 540px;
  background: #ffffff;

  @media only screen and (max-width: 600px) {
    min-height: 360px;
  }
`

export const MainTextContent = styled.div`
  padding-top: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    padding-top: 40px;
  }
`

export const TitleTextContent = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;

  text-align: center;

  color: #3d3d3d;

  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }
`

export const TextContent = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;

  color: #3d3d3d;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 28px;

    text-align: center;
  }
`

export const Button = styled.button`
  height: 68px;
  width: 304px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 4px;

  background: #5e20a4;
`

export const LinkContent = styled.div`
  margin-top: 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #5e20a4;
`

export const ButtonBody = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  display: flex;
  align-items: center;

  color: #ffffff;
`

export const ButtonText = styled.div`
  margin-top: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  display: flex;
  align-items: center;

  color: #ffffff;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 72px 50px 35px 128px;

  @media only screen and (max-width: 600px) {
    padding: 40px 0 20px 0;

    flex-direction: column;
  }
`

export const LinksContent = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    padding: 4px 0 16px 0;

    flex-wrap: wrap;
    justify-content: center;
  }
`

export const NavLink = styled.a`
  margin: 0 15px 0 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #3d3d3d;

  @media only screen and (max-width: 600px) {
    padding: 16px 0 0 0;
  }
`

export const SvgDiv = styled.div`
  display: flex;
  width: 167px;
  justify-content: space-between;
`
export const Copyright = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  text-align: center;

  color: #3d3d3d;

  mix-blend-mode: normal;
  opacity: 0.6;
`
