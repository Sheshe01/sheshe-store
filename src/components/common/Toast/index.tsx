import React, { useState, useEffect, useCallback } from 'react'

import { ToastProps } from './types'

import * as Styled from './styles'
import Text from '../Text'

let timeout: NodeJS.Timeout
let openTimeout: NodeJS.Timeout

const Toast: React.FC<ToastProps> = ({
  isOpen,
  duration = 3000,
  title,
  description = '',
  hasAutoDismiss = true,
  closeCallback = null
}) => {
  const [isOpenState, setOpen] = useState(false)
  const onClose = useCallback(() => {
    const toastElement = document.querySelectorAll<HTMLElement>('.ReactToast')
    if (closeCallback) closeCallback()
    setOpen(false)
    setTimeout(() => {
      if (toastElement) {
        toastElement[0].setAttribute('styles', '')
      }
    }, duration)
  }, [closeCallback, setOpen, duration])

  useEffect(() => {
    if (timeout) clearTimeout(timeout)
    if (openTimeout) clearTimeout(openTimeout)
    if (isOpen && isOpen !== isOpenState) {
      openTimeout = setTimeout(() => setOpen(true), 50)
    } else if (!isOpen) {
      setOpen(false)
    }
    if (isOpen && hasAutoDismiss) {
      timeout = setTimeout(onClose, duration)
    }
  }, [isOpen, duration, setOpen, hasAutoDismiss, onClose, isOpenState])

  return (
    <Styled.ReactToast className="ReactToast" isOpen={isOpenState}>
      <Text large>{title}</Text>
      {description ? <Text large>{description}</Text> : null}
    </Styled.ReactToast>
  )
}

export default Toast
