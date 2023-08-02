export type PrimaryInputProps = {
  type: string
  validate: (input: string) => boolean
  onInputChange: (value: string) => void
  value: string
  sufix?: string
  placeholder: string
  hideLabel?: boolean
  inputError: string
}
