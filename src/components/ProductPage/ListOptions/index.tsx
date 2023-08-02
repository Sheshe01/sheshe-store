import React, { useCallback, useState } from 'react'
import Checkbox from 'components/form/CheckBox'
import { ListOptionsProps } from './types'

import * as Styled from './styles'
import { OptionsVariation } from 'domain/models'

const ListOptions: React.FC<ListOptionsProps> = ({
  data,
  handleOptionClick,
  checkBoxType
}) => {
  const [singleSelection, setSingleSelection] = useState<string>('')

  const updateSingleSelection = useCallback(
    (value: string) => {
      let newSelection: string
      if (singleSelection.includes(value)) {
        newSelection = ''
      } else {
        newSelection = value
      }

      setSingleSelection(newSelection)
      return newSelection
    },
    [singleSelection]
  )
  const handleCheckboxChange = useCallback(
    (value: string) => {
      const newSelection = updateSingleSelection(value)

      handleOptionClick(newSelection, checkBoxType)
    },
    [updateSingleSelection, handleOptionClick]
  )

  return (
    <Styled.ContainerListOptions>
      {data.map(item => (
        <Checkbox
          key={item}
          id={item}
          handleCheckboxChange={handleCheckboxChange}
          checked={singleSelection === item}
          labelText={item}
        />
      ))}
    </Styled.ContainerListOptions>
  )
}

export default ListOptions
