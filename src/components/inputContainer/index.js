import { useState } from 'react'

import axios from 'axios'

import {
  ContainerInput,
  Title,
  SubTitle,
  Form,
  Input,
  InputButton,
} from './styled'

export const InputContainer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const options = {
    name: `${name}`,
    email: `${email}`,
  }

  const userInput = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post(
        'https://api.jungledevs.com/api/v1/challenge-newsletter/',
        options
      )
      console.log(response.data)
      alert('Registration completed!')
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
        if (error.response.data.email) {
          alert(error.response.data.email)
        } else if (error.response.data.name) {
          alert(error.response.data.name)
        } else {
          alert(error.response.data.error)
        }
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
    }
    setIsLoading(false)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    userInput()
  }

  return (
    <ContainerInput>
      <Title>Are you a parent without a nanny and looking to share?</Title>
      <SubTitle>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </SubTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleChangeName}
        />
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleChangeEmail}
        />
        {!isLoading ? (
          <InputButton type="submit" value="Send" />
        ) : (
          <InputButton
            type="submit"
            value="Loading"
            disabled
            style={{ backgroundColor: '#a80038' }}
          />
        )}
      </Form>
    </ContainerInput>
  )
}
