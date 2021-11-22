import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Container, Avatar, Main, Info, Title, Dados, GoToBack } from './styled'

declare interface IProps {
  avatar: string
  name: string
  age?: string
  eye?: string
  company?: string
  email?: string
}

const PerfilUser = ({ avatar, name, age, eye, company, email }: IProps): JSX.Element => {
  return (
    <Container>
      <Avatar>
        <img src={avatar} />
      </Avatar>
      <Main>
        <Info>
          <Title>Name</Title>
          <Dados>{name}</Dados>
          {age && (
            <>
              <Title>Age</Title>
              <Dados>{age}</Dados>
            </>
          )}
          {eye && (
            <>
              <Title>Eye Color</Title>
              <Dados>{eye}</Dados>
            </>
          )}
          {company && (
            <>
              <Title>Company</Title>
              <Dados>{company}</Dados>
            </>
          )}
          {email && (
            <>
              <Title>E-mail</Title>
              <Dados>{email}</Dados>
            </>
          )}
        </Info>
      </Main>
      <GoToBack onClick={() => history.back()}>
        <FaArrowLeft />
      </GoToBack>
    </Container>
  )
}

export default PerfilUser
