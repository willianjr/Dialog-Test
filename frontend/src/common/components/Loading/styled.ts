import styled from 'styled-components'

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  flex-direction: column;
  color: ${({ theme: { colors } }) => colors.primary.white};
  font-size: 1rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
`
