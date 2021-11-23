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
