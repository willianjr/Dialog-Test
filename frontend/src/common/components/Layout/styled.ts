import styled from 'styled-components'
import { Container, Alert } from 'react-bootstrap'

export const ContainerStyles = styled(Container).attrs(() => ({}))`
  padding: 0.5rem;
  @media (max-width: 767px) {
    padding: 1.5rem;
  }
`

export const HeaderStyle = styled.header.attrs(() => ({
  className: '',
}))`
  min-height: 20vh;
  margin-bottom: 2vh;
`
export const MainStyle = styled.main.attrs(() => ({
  className: '',
}))`
  min-height: 80vh;
`
export const GoToTop = styled.button`
  background: ${({ theme: { colors } }) => colors.background.button};
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 50%;

  border: none;
  position: fixed;
  right: 0;
  top: 96.5vh;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999999;

  svg {
    width: 1rem !important;
    height: 1rem !important;
    color: ${({ theme: { colors } }) => colors.primary.white};
  }
`
export const SemUsuarios = styled(Alert)`
  background-color: ${({ theme: { colors } }) => colors.secondaries[20]};
  border-color: ${({ theme: { colors } }) => colors.secondaries[50]};
  color: ${({ theme: { colors } }) => colors.primary.primary};
`
