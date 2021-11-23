import React, { ReactNode, useState } from 'react'
import { HeaderStyle, ContainerStyles, MainStyle, GoToTop } from './styled'
import { FaArrowUp } from 'react-icons/fa'

declare interface IProps {
  children?: ReactNode
}

const Container = ({ children }: IProps): JSX.Element => {
  const [showButton, setShowButton] = useState(false)
  const scroll = document.documentElement.scrollTop
  const scrollToTop = (): void => {
    document.documentElement.scrollTop = 0
  }
  document.addEventListener('scroll', () => {
    setShowButton(scroll > 300)
  })
  return (
    <ContainerStyles>
      {showButton && (
        <GoToTop onClick={scrollToTop}>
          <FaArrowUp />
        </GoToTop>
      )}
      {children}
    </ContainerStyles>
  )
}
const Header = ({ children }: IProps): JSX.Element => {
  return <HeaderStyle>{children}</HeaderStyle>
}
const Main = ({ children }: IProps): JSX.Element => {
  return <MainStyle>{children}</MainStyle>
}

export default { Header, Container, Main }
