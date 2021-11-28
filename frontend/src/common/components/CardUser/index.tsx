import React from 'react'
import Image from '../Image'
import { Link } from 'react-router-dom'
import { Cards, Main, Info, Title, Dados } from './styled'

declare interface IProps {
  avatar: string
  name: string
  age?: string
  eye?: string
  company?: string
  email?: string
  id: string
  url?: boolean
}

const CardUser = ({ url, id, avatar, name, age, eye, company, email }: IProps): JSX.Element => {
  return (
    <Cards>
      <Link to={`${url ? `/perfil/${id}` : ``}`}>
        <Image src={avatar} width={`325px`} height={`325px`} css="card-img-top" />
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
      </Link>
    </Cards>
  )
}

export default CardUser
