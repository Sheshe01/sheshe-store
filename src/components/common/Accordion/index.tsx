import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Text from 'components/common/Text'
import { AccordionProps } from './types'
import { Header, Section } from './styles'

const Accordion: React.FC<AccordionProps> = ({
  i,
  expanded,
  setExpanded,
  childrenHeader,
  children,
  showArrow = true
}) => {
  const isOpen = i === expanded
  return (
    <React.Fragment>
      <Header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        headerIsOpen={isOpen}
        className="accordion__header"
      >
        <Text body>{childrenHeader}</Text>
        {showArrow ? <MdKeyboardArrowDown size={15} /> : null}
      </Header>
      {/* <AnimatePresence initial={false}> */}
      {isOpen && (
        <Section
          className="accordion__section"
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </Section>
      )}
      {/* </AnimatePresence> */}
    </React.Fragment>
  )
}

export default Accordion
