import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'

declare interface IRows {
  gx?: number
  gy?: number
  g?: number
  align?: 'center' | 'stretch' | 'start'
}
declare interface ICol {
  stretch?: boolean
}

export const Rows = styled(Row).attrs(({ g, gx, gy, align = 'start' }: IRows) => ({
  className: `align-items-${align} g${gx ? 'x' : gy ? 'y' : ``}-${gx || gy || g}`,
}))<IRows>``
export const Cols = styled(Col).attrs(() => ({
  className: `align-items-stretch`,
}))<ICol>``

export const SubTitle = styled.h6.attrs(() => ({
  className: ``,
}))`
  color: ${({ theme: { colors } }) => colors.primary.primary};
  font-size: 1.3rem;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.primary.secondary};
  margin: 1.5rem 0;
`
