import React, { useState, useCallback } from 'react'
import { BsFilter } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import Accordion from 'components/common/Accordion'
import Text from 'components/common/Text'
import Checkbox from 'components/form/CheckBox'
import { FiltersContainerProps } from './types'
import {
  Container,
  ContainerFiltersList,
  ContainerText,
  MotionDiv
} from './styles'

const variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.055
    },
    display: 'block'
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.055,
      delay: 0.05
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

const FiltersContainer: React.FC<FiltersContainerProps> = ({
  attributes,
  handleFiltersClick
}) => {
  const [expanded, setExpanded] = useState<false | number>(false)
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  const [multiSelection, setMultiSelection] = useState<string[]>([])

  const addToMultiSelection = useCallback(
    (value: string) => {
      const newSelection = [...multiSelection, value]
      setMultiSelection(newSelection)
      return newSelection
    },
    [multiSelection]
  )

  const removeFromMultiSelection = useCallback(
    (value: string) => {
      const newSelection = multiSelection.filter(
        (item: string | null) => item !== value
      )
      setMultiSelection(newSelection)
      return newSelection
    },
    [multiSelection]
  )

  const updateMultiSelection = useCallback(
    (value: string) => {
      let newSelection: string[] = []
      if (multiSelection.includes(value)) {
        newSelection = removeFromMultiSelection(value)
      } else {
        newSelection = addToMultiSelection(value)
      }

      return newSelection
    },
    [multiSelection, addToMultiSelection, removeFromMultiSelection]
  )

  const handleCheckboxChange = useCallback(
    (value: string) => {
      const newSelection = updateMultiSelection(value)
      handleFiltersClick(newSelection)
    },
    [updateMultiSelection, handleFiltersClick]
  )
  return (
    <Container>
      <ContainerText onClick={() => setIsFilterVisible(!isFilterVisible)}>
        {isFilterVisible ? <IoClose size={24} /> : <BsFilter size={24} />}
        <Text body>Filtros</Text>
      </ContainerText>
      <ContainerFiltersList
        variants={variants}
        animate={isFilterVisible ? 'visible' : 'hidden'}
        transition={{
          duration: 0.025
        }}
      >
        {attributes.map((attribute, index) => (
          <Accordion
            key={attribute.id}
            i={index}
            expanded={expanded}
            childrenHeader={attribute.name}
            setExpanded={setExpanded}
          >
            <MotionDiv transition={{ duration: 0.2 }}>
              {attribute.values?.map(item => (
                <Checkbox
                  key={item.id}
                  id={item.id}
                  checked={multiSelection.includes(item.name)}
                  handleCheckboxChange={handleCheckboxChange}
                  labelText={item.name}
                />
              ))}
            </MotionDiv>
          </Accordion>
        ))}
      </ContainerFiltersList>
    </Container>
  )
}

export default FiltersContainer
