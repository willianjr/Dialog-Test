import React from 'react'
import { Cards, Avatar, Main, Info, Title, Dados } from './styled'

declare interface IProps {
  avatar: string
  name: string
  age?: string
  eye?: string
  company?: string
  email?: string
}

const CardUser = ({ avatar, name, age, eye, company, email }: IProps): JSX.Element => {
  return (
    <Cards>
      <Avatar variant={`top`} src={avatar} />
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
    </Cards>
  )
}

export default CardUser
