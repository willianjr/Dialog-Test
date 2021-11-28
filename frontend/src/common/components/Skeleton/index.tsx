import React from 'react'
import skeletonProps from '../../interfaces/skeleton'
import { LoadingSkeleton } from './styled'

const Default = ({ width, height }: skeletonProps): JSX.Element => <LoadingSkeleton width={width} height={height} />

export default Default
