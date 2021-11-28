import React, { useState } from 'react'

import { Skeleton } from '../'
interface ImageProps {
  src: string
  css?: string
  width?: string
  height?: string
}
const Image = ({ src, css, width = '', height = '' }: ImageProps): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <>
      <img onLoad={(e) => setImageLoaded(true)} src={src} className={css} loading={`lazy`} />
      {!imageLoaded && <Skeleton width={width} height={height} />}
    </>
  )
}

export default Image
