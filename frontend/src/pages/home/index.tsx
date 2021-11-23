import React from 'react'
import { Layout, CardUser, Header } from '../../common/components'
import { Rows, Cols } from './styled'

import avatar from '../../common/assets/images/lixu/avatar1.png'
import avatar2 from '../../common/assets/images/lixu/avatar2.png'

const HomePage = (): JSX.Element => {
  return (
    <Layout.Container>
      <Layout.Header>
        <Rows align={`center`}>
          <Header />
        </Rows>
      </Layout.Header>
      <Layout.Main>
        <Rows align={`stretch`} g={3}>
          <Cols md={3} sm={12}>
            <CardUser avatar={avatar2} name={`nome x ee e ee`} />
          </Cols>
          <Cols md={3} sm={12}>
            <CardUser
              avatar={avatar}
              name={`nome x ee e ee`}
              email={`email@email.com`}
              age={`23 years`}
              company={`facebook`}
            />
          </Cols>
          <Cols md={3} sm={12}>
            <CardUser avatar={avatar2} name={`nome x ee e ee`} />
          </Cols>
          <Cols md={3} sm={12}>
            <CardUser avatar={avatar} name={`nome x ee e ee`} />
          </Cols>
          <Cols md={3} sm={12}>
            <CardUser avatar={avatar2} name={`nome x ee e ee`} />
          </Cols>
          <Cols md={3} sm={12}>
            <CardUser avatar={avatar} name={`nome x ee e ee`} />
          </Cols>
          <Cols md={3} sm={12}>
            <CardUser avatar={avatar2} name={`nome x ee e ee`} />
          </Cols>
          <Cols md={3} sm={12}>
            <CardUser avatar={avatar} name={`nome x ee e ee`} />
          </Cols>
          <Cols md={3} sm={12}>
            <CardUser avatar={avatar2} name={`nome x ee e ee`} />
          </Cols>
        </Rows>
      </Layout.Main>
    </Layout.Container>
  )
}

export default HomePage
