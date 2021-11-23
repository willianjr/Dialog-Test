import React, { useEffect, useState } from 'react'
import { Col, InputGroup } from 'react-bootstrap'
import { Logo, Rows, Input, ButtonSearch } from './styled'
import { RiUserSearchFill } from 'react-icons/ri'
import Images from '../../assets/images'

const Header = (): JSX.Element => {
  const [search, setSearch] = useState('')
  useEffect(() => {
    console.log(search)
  }, [search])
  return (
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
  )
}

export default Header
