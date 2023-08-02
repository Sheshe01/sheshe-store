import React from 'react'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import LinkComponent from 'components/common/LinkComponent'
import Text from 'components/common/Text'
import colors from 'styles/theme/colors'
import * as Styled from './styles'

const ContactPage: React.FC = () => {
  return (
    <Styled.ContactContainer>
      <Text heading={500} color={colors.orange.extraBold}>
        Fale conosco
      </Text>
      <Styled.Contact>
        <Styled.ContactItem>
          <AiOutlinePhone size={32} />
          <LinkComponent href="https://wa.me/message/ULEZSQC2X3VGP1" isNewTab>
            +351 939 167 442
          </LinkComponent>
        </Styled.ContactItem>
        <Styled.ContactItem>
          <AiOutlineMail size={32} />
          <LinkComponent href="mailto:info@sheshe-store.com" isNewTab>
            info@sheshe-store.com
          </LinkComponent>
        </Styled.ContactItem>
        <Styled.ContactItem>
          <BsInstagram size={32} />
          <LinkComponent href="https://www.instagram.com/sheshe.intl/" isNewTab>
            @sheshe.intl
          </LinkComponent>
        </Styled.ContactItem>
        <Styled.ContactItem>
          <BsFacebook size={32} />
          <LinkComponent href="https://www.facebook.com/sheshe.intl" isNewTab>
            @sheshe
          </LinkComponent>
        </Styled.ContactItem>
      </Styled.Contact>
    </Styled.ContactContainer>
  )
}

export default ContactPage
