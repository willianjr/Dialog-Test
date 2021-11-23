import styled from 'styled-components'

export const Container = styled.section.attrs(() => ({
  className: ``,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: stretch;
  }
`
export const Avatar = styled.div.attrs(() => ({}))`
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: stretch;
  margin: 0 2rem;
  img {
    flex: 1;
    min-height: 16rem;
  }
`
export const Main = styled.div.attrs(() => ({}))`
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const Info = styled.div.attrs(() => ({}))`
  padding: 0.5rem;
`
export const Title = styled.strong.attrs(() => ({}))`
  color: ${({ theme: { colors } }) => colors.primary.primary};
  font-size: 0.93rem;
  line-height: 0.93rem;
  margin: 0.25rem auto;
  display: block; ;
`
export const Dados = styled.span.attrs(() => ({}))`
  color: ${({ theme: { colors } }) => colors.primary.black};
  font-size: 0.93rem;
  line-height: 0.93rem;
  margin: 0.25rem auto;
`

export const GoToBack = styled.button`
  background: ${({ theme: { colors } }) => colors.primary.primary};
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 50%;

  border: none;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999999;

  svg {
    width: 1rem !important;
    height: 1rem !important;
    color: ${({ theme: { colors } }) => colors.primary.white};
  }
  @media (max-width: 767px) {
    top: 0;
    transform: translateY(0);
    right: 0rem;
  }
`
