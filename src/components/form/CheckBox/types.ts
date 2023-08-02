export type CheckboxProps = {
  id: string
  checked: boolean
  handleCheckboxChange(text?: string): void
  labelText: string
  helpText?: string
}
