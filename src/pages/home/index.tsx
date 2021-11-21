import React, { useEffect, useState } from 'react'
import { Col, InputGroup } from 'react-bootstrap'
import { Layout, CardUser } from '../../common/components'
import { Logo, Rows, Cols, Input, ButtonSearch } from './styled'
import Images from '../../common/assets/images'
import { RiUserSearchFill } from 'react-icons/ri'

import avatar from '../../common/assets/images/lixu/avatar1.png'
import avatar2 from '../../common/assets/images/lixu/avatar2.png'

const HomePage = (): JSX.Element => {
  const [search, setSearch] = useState('')
  useEffect(() => {
    console.log(search)
  }, [search])
  return (
    <Layout.Container>
      <Layout.Header>
        <Rows align={`center`}>
          <Col md={{ span: 2, offset: 1 }} sm={12}>
            <Logo src={Images.logos.vertical} />
          </Col>
          <Col md={{ span: 7, offset: 1 }} sm={12}>
            <InputGroup>
              <Input
                type="text"
                placeholder="search a friend"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearch(e.target.value)
                }}
                aria-label="search a friend"
              />
              <ButtonSearch variant="outline-primary">
                <RiUserSearchFill />
              </ButtonSearch>
            </InputGroup>
          </Col>
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
