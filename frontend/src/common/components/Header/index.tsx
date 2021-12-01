import React, { useState } from 'react'
import { Col, InputGroup } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { Logo, Rows, Input, ButtonSearch } from './styled'
import { RiUserSearchFill } from 'react-icons/ri'
import Images from '../../assets/images'

const Header = (): JSX.Element => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    search !== '' && navigate(`/search/${search}`)
  }

  return (
    <Rows align={`center`}>
      <Col md={{ span: 2, offset: 1 }} sm={12}>
        <Link to="/">
          <Logo alt={`Logomarca`} src={Images.logos.vertical} />
        </Link>
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
          <ButtonSearch
            aria-label="Pesquisar"
            disabled={search === ''}
            variant="outline-primary"
            onClick={() => handleSearch()}>
            <RiUserSearchFill />
          </ButtonSearch>
        </InputGroup>
      </Col>
    </Rows>
  )
}

export default Header
