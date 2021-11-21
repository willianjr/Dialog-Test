import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { Animation } from '../../../common/components'
import Images from '../../../common/assets/images'
import routes, { IRoute } from '../../../common/config/routes'

import { Container, Info, ButtonGroup, TagGroup, ButtonVoltar } from './styled'

const Login = (): JSX.Element => {
  const location = useLocation()
  const renderSuggestionPages = () => {
    return routes
      .filter((page) => page.name.toLowerCase().includes(''))
      .map((page: IRoute) => {
        return (
          <div key={page.name}>
            <Link to={page.path}>{page.name}</Link>
          </div>
        )
      })
  }
  return (
    <Container>
      <div>
        <Animation width={`650px`} animation={Images.animations.error} />
        <Info>A Página {`"${location.pathname}"`} não foi encontrada.</Info>
        <ButtonGroup>
          <ButtonVoltar onClick={() => history.back()}>
            <FaArrowLeft />
            Voltar
          </ButtonVoltar>
        </ButtonGroup>
        <Info>Sugerimos as páginas abaixo:</Info>
        <TagGroup>{renderSuggestionPages()}</TagGroup>
      </div>
    </Container>
  )
}

export default Login
