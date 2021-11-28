import React, { ReactNode } from 'react'
import { Animation } from '..'
import Images from '../../assets/images'
import { Modal } from './styled'

const Loading = ({ children }: { children: ReactNode }): JSX.Element => (
  <Modal>
    <Animation animation={Images.animations.loading} />
    {children}
  </Modal>
)

export default Loading
