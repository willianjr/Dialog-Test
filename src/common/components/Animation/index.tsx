import { useLottie } from 'lottie-react'

declare interface animationProps {
  animation: Record<string, unknown>
  width?: string
  height?: string
}

const Animation = ({ animation, width, height }: animationProps): JSX.Element => {
  const defaultOptions = {
    animationData: animation,
    loop: true,
    autoplay: true,
    style: {
      height: height,
      width: width,
    },
  }

  const { View } = useLottie(defaultOptions)
  return View
}

export default Animation
