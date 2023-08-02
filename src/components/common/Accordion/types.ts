export type AccordionProps = {
  i: number
  expanded: false | number
  setExpanded: React.Dispatch<React.SetStateAction<false | number>>
  childrenHeader: string
  showArrow?: boolean
}
