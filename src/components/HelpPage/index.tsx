import React, { useState } from 'react'
import Text from 'components/common/Text'
import colors from 'styles/theme/colors'
import * as Styled from './styles'
import { questionsAnswers } from './helpers'
import Accordion from 'components/common/Accordion'
import withHtmlContent from 'utils/withHtmlContent'

const HelpPage: React.FC = () => {
  const [expanded, setExpanded] = useState<false | number>(false)
  return (
    <Styled.HelpContainer>
      <Text
        heading={500}
        color={colors.orange.extraBold}
        style={{ marginBottom: '1rem' }}
      >
        AJUDA - FAQ
      </Text>
      {questionsAnswers.map((questionAnswer, index) => (
        <Styled.AccordionContainer key={questionAnswer.id}>
          <Accordion
            i={index}
            expanded={expanded}
            setExpanded={setExpanded}
            childrenHeader={questionAnswer.question}
            showArrow={false}
          >
            <Styled.MontionDiv>
              <Text {...withHtmlContent(questionAnswer.answer)} />
            </Styled.MontionDiv>
          </Accordion>
        </Styled.AccordionContainer>
      ))}
    </Styled.HelpContainer>
  )
}

export default HelpPage
