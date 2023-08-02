import React from 'react'
import Image from 'next/image'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import Badge from 'assets/images/badge.png'
import useWindowSize from 'hooks/useWindowSize'
import LinkComponent from 'components/common/LinkComponent'

import {
  FooterContainer,
  ContainerLinks,
  ContainerForm,
  InputElement,
  ButtonElement,
  FooterCopyright,
  Copyright,
  Links,
  FooterStyles,
  SocialMedia
} from './styles'

const Footer: React.FC = () => {
  const { isMobileDevice } = useWindowSize()
  const desktopRender = () => (
    <FooterContainer>
      <ContainerLinks>
        <LinkComponent href="/designers">Designers</LinkComponent>
        <LinkComponent href="/institutional">A alma de áfrica</LinkComponent>
        <LinkComponent href="/contact">Contato</LinkComponent>
      </ContainerLinks>
      <ContainerForm>
        <Image
          quality={100}
          src={Badge}
          alt="Logotipo Sheshe"
          width="100"
          height="100"
        />
        <SocialMedia>
          <LinkComponent href="https://www.instagram.com/sheshe.intl/" isNewTab>
            <BsInstagram size={32} />
          </LinkComponent>
          <LinkComponent href="https://www.facebook.com/sheshe.intl" isNewTab>
            <BsFacebook size={32} />
          </LinkComponent>
        </SocialMedia>
      </ContainerForm>
    </FooterContainer>
  )

  const mobileRender = () => (
    <FooterContainer>
      <ContainerForm>
        <Image
          quality={100}
          src={Badge}
          alt="Logotipo Sheshe"
          width="100"
          height="100"
        />
        <SocialMedia>
          <LinkComponent href="https://www.instagram.com/sheshe.intl/" isNewTab>
            <BsInstagram size={32} />
          </LinkComponent>
          <LinkComponent href="https://www.facebook.com/sheshe.intl" isNewTab>
            <BsFacebook size={32} />
          </LinkComponent>
        </SocialMedia>
      </ContainerForm>
      <ContainerLinks>
        <LinkComponent href="/designers">Designers</LinkComponent>
        <LinkComponent href="/institutional">A alma de áfrica</LinkComponent>
        <LinkComponent href="/contact">Contato</LinkComponent>
      </ContainerLinks>
    </FooterContainer>
  )
  return (
    <FooterStyles>
      {isMobileDevice ? mobileRender() : desktopRender()}
      <FooterCopyright>
        <Copyright body>Copyright 2021 Sheshe Ltda</Copyright>
        <Links>
          <LinkComponent href="/help">Ajuda</LinkComponent>
          <LinkComponent href="/privacy-policy">
            Política de privacidade
          </LinkComponent>
        </Links>
      </FooterCopyright>
    </FooterStyles>
  )
}

export default Footer
