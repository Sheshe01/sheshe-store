import React, { SyntheticEvent, useCallback, useRef, useState } from 'react'
import { CheckboxProps } from './types'

import { Container, HiddenCheckbox, StyledCheckbox, Label } from './styles'

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  handleCheckboxChange,
  labelText,
  helpText
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const node = useRef<HTMLDivElement>(null)
  const checkboxRef = useRef<HTMLInputElement>(null)

  const handleCheckboxClick = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault()
      handleCheckboxChange(labelText)
    },
    [handleCheckboxChange, labelText]
  )

  return (
    <Container
      ref={node}
      onClick={(e: SyntheticEvent) => handleCheckboxClick(e)}
    >
      <HiddenCheckbox
        placeholder={labelText}
        ref={checkboxRef}
        defaultChecked={checked}
        id={id}
        onFocus={() => {
          setIsFocused(true)
          node.current?.scrollIntoView({ block: 'nearest' })
        }}
        onBlur={() => setIsFocused(false)}
        onChange={(e: SyntheticEvent) => handleCheckboxClick(e)}
      />
      <StyledCheckbox
        defaultChecked={checked}
        focused={isFocused}
        onClick={(e: SyntheticEvent) => handleCheckboxClick(e)}
      />
      <Label htmlFor={id}>
        {labelText}
        {helpText && <span>{helpText}</span>}
      </Label>
    </Container>
  )
}

export default Checkbox
