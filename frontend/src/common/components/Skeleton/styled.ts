import styled, { keyframes } from 'styled-components'
import skeletonProps from '../../interfaces/skeleton'

const KeyFrameLoading = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

export const LoadingSkeleton = styled.div<skeletonProps>`
  background-color: ${({ theme: { colors } }) => colors.silvers[35]};
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  position: absolute;
  z-index: 9999;
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`
