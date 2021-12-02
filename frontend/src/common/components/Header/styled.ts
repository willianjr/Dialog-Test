import styled from 'styled-components'
import { Row, Form, Button } from 'react-bootstrap'
const { Control } = Form

export const Logo = styled.img.attrs(() => ({
  className: '',
}))`
  width: 100%;
  max-width: 60vw;
  margin: 0 auto;
  display: flex;
  align-self: center;

  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`

export const Input = styled(Control)`
  height: 3.75rem;
  background: ${({ theme: { colors } }) => colors.input.default.background};
  color: ${({ theme: { colors } }) => colors.input.default.text};
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.3s linear;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme: { colors } }) => colors.input.default.text};
    filter: opacity(0.8);
  }
  :-ms-input-placeholder {
    color: ${({ theme: { colors } }) => colors.input.default.text};
    filter: opacity(0.8);
  }
  :focus {
    background-color: ${({ theme: { colors } }) => colors.input.default.backgroundHover};
    color: ${({ theme: { colors } }) => colors.input.default.textHover};
    box-shadow: 0px 0px 10px ${({ theme: { colors } }) => colors.input.default.shadowHover};
  }
`
export const ButtonSearch = styled(Button)`
  height: 3.75rem;
  width: 3.75rem;
  background: ${({ theme: { colors } }) => colors.button.default.background};
  color: ${({ theme: { colors } }) => colors.button.default.text};
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.3s linear;
  > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
  :focus,
  :active,
  :hover {
    background-color: ${({ theme: { colors } }) => colors.button.default.backgroundHover};
    color: ${({ theme: { colors } }) => colors.button.default.textHover};
  }
  :disabled {
    background: ${({ theme: { colors } }) => colors.button.default.background};
    color: ${({ theme: { colors } }) => colors.button.default.text};
    opacity: 0.5;
    cursor: default;
  }
`

declare interface IRows {
  gx?: number
  gy?: number
  g?: number
  align?: 'center' | 'stretch' | 'start'
}

export const Rows = styled(Row).attrs(({ g, gx, gy, align = 'start' }: IRows) => ({
  className: `align-items-${align} g${gx ? 'x' : gy ? 'y' : ``}-${gx || gy || g}`,
}))<IRows>``
