import React from 'react'
import { useQuery } from '@apollo/client'
import { Layout, CardUser, Header, Loading } from '../../common/components'
import { Rows, Cols } from './styled'
import userType from '../../common/interfaces/user'
import queries from '../../main/queries'
import { useParams } from 'react-router'

const HomePage = (): JSX.Element => {
  const { search } = useParams()
  const searchParams = search || ''
  const { loading, error, data } = useQuery(queries.GET_LIST, {
    variables: { searchParams },
  })
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
        ) : (
          <Rows align={`stretch`} g={3}>
            {data.list.map((item: userType, index: number) => (
              <Cols key={index} md={3} sm={12}>
                <CardUser
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
            {data.list.length === 0 && <Layout.SemUsuario>Nenhum usuário encontrado</Layout.SemUsuario>}
          </Rows>
        )}
      </Layout.Main>
    </Layout.Container>
  )
}

export default HomePage
