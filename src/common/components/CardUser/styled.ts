import styled from 'styled-components'
import { Card } from 'react-bootstrap'
const { Img, Body, Text } = Card

export const Cards = styled(Card).attrs(() => ({
  className: `align-self-stretch`,
}))`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 0px 20px ${({ theme: { colors } }) => colors.secondaries[40]};
  height: 100%;
`
export const Avatar = styled(Img).attrs(() => ({}))``
export const Main = styled(Body).attrs(() => ({}))``
export const Info = styled(Text).attrs(() => ({}))`
  padding: 0.5rem;
`
export const Title = styled.strong.attrs(() => ({}))`
  color: ${({ theme: { colors } }) => colors.primary.primary};
  font-size: 0.93rem;
  line-height: 0.93rem;
  margin: 0.25rem auto;
  display: block;
`
export const Dados = styled.span.attrs(() => ({}))`
  color: ${({ theme: { colors } }) => colors.primary.black};
  font-size: 0.93rem;
  line-height: 0.93rem;
  margin: 0.25rem auto;
`
