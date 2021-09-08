import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 64px 16px 64px 16px;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  text-align: center;

  color: #3d3d3d;
`

export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  line-height: 24px;
  text-align: center;

  color: #3d3d3d;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 28px;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 74px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 32px;
    align-items: center;
  }
`

export const Input = styled.input`
  background: #ffffff;

  height: 48px;
  width: 232px;

  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0 6px 0 6px;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: #3d3d3d;

  @media only screen and (max-width: 600px) {
    width: 328px;
    margin: 5px 0 5px 0;
  }
`

export const InputButton = styled.input`
  background: #00a870;

  border-radius: 4px;
  width: 96px;
  height: 48px;
  margin-left: 6px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  align-items: center;
  text-align: center;

  color: #ffffff;

  @media only screen and (max-width: 600px) {
    width: 328px;
    margin-top: 12px;
    margin-left: 0px;
  }
`
