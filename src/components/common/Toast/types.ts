export type ToastProps = {
  isOpen: boolean
  duration?: number
  title: string
  description?: string
  hasAutoDismiss?: boolean
  closeCallback?: () => void
}
