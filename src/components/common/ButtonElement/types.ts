import { MouseEventHandler } from 'react'

export type ButtonElementProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}
