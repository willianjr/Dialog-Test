import React from 'react'
import { useQuery } from '@apollo/client'
import { Layout, CardUser, PerfilUser, Header, Loading } from '../../common/components'
import { Rows, Cols, SubTitle } from './styled'
import userType from '../../common/interfaces/user'
import queries from '../../main/queries'
import { useParams } from 'react-router'

const HomePage = (): JSX.Element => {
  const { perfil } = useParams()
  const perfilParams = perfil || ''
  const { loading, error, data } = useQuery(queries.GET_USER, {
    variables: { perfilParams },
  })
  console.log(data)
  if (error) return <h1>`Error! ${JSON.stringify(error, null, 2)}`</h1>
  return (
    <Layout.Container>
      <Layout.Header>
        <Rows align={`center`}>
          <Header />
        </Rows>
      </Layout.Header>
      <Layout.Main>
        {loading ? (
          <Loading>Carregando</Loading>
        ) : data.user ? (
          <>
            <Rows align={`stretch`} g={3}>
              <PerfilUser
                avatar={data.user.picture}
                name={data.user.name}
                email={data.user.email}
                age={data.user.age}
                company={data.user.company}
              />
            </Rows>
            <SubTitle>Friends</SubTitle>
            <Rows align={`stretch`} g={3}>
              {data.user.friends.map((item: userType, index: number) => (
                <Cols key={index} md={3} sm={12}>
                  <CardUser
                    url={false}
                    id={item._id}
                    avatar={item.picture}
                    name={item.name}
                    age={item.age}
                    email={item.email}
                    eye={item.eyeColor}
                    company={item.company}
                  />
                </Cols>
              ))}
            </Rows>
          </>
        ) : (
          <Layout.SemUsuario>Nenhum usuário encontrado</Layout.SemUsuario>
        )}
      </Layout.Main>
    </Layout.Container>
  )
}

export default HomePage
