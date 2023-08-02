import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logotipo from 'assets/images/logotipo.png'
import TopMenu from './TopMenu'
import Menu from './Menu'
import HeaderSlider from './HeaderSlider'
import Text from 'components/common/Text'
import colors from 'styles/theme/colors'
import useWindowSize from 'hooks/useWindowSize'
import { HeaderProps } from './types'
import { rgbDataURL } from 'utils/helpers'
import {
  HeaderContainer,
  HeaderMenu,
  HeaderMenuToggleWrapper,
  HeaderMenuToggle,
  HeaderNavbar,
  HeaderImage,
  TextContainer,
  HeaderMobileContent,
  HeaderMobile,
  ImageContainer
} from './styles'

const Header: React.FC<HeaderProps> = ({
  categories,
  isCategoryPage = false,
  categoryFound,
  isProductPage = false
}) => {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false)
  const [headerMenuOver, setHeaderMenuOver] = useState(false)
  const { isMobileDevice } = useWindowSize()

  const homePageHeader = () => (
    <>
      <HeaderMenu>
        <HeaderMenuToggleWrapper>
          <HeaderMenuToggle
            isCollapsed={isNavbarMenuOpen}
            onToggle={() => setIsNavbarMenuOpen(!isNavbarMenuOpen)}
          />
          {isMobileDevice ? (
            <ImageContainer>
              <Link href="/" passHref>
                <a>
                  <Image
                    quality={100}
                    src={Logotipo}
                    alt="Logotipo Sheshe"
                    width="100"
                    height="34"
                  />
                </a>
              </Link>
            </ImageContainer>
          ) : null}
        </HeaderMenuToggleWrapper>
        <HeaderNavbar isCollapsed={isNavbarMenuOpen}>
          <TopMenu isCollapsed={isNavbarMenuOpen} />
          <Menu isCollapsed={isNavbarMenuOpen} categories={categories} />
        </HeaderNavbar>
      </HeaderMenu>
      <HeaderSlider />
    </>
  )
  const productPageHeader = () => (
    <>
      <HeaderMenu>
        <HeaderMenuToggleWrapper>
          <HeaderMenuToggle
            isCollapsed={isNavbarMenuOpen}
            onToggle={() => setIsNavbarMenuOpen(!isNavbarMenuOpen)}
          />
          {isMobileDevice ? (
            <ImageContainer>
              <Link href="/" passHref>
                <a>
                  <Image
                    quality={100}
                    src={Logotipo}
                    alt="Logotipo Sheshe"
                    width="100"
                    height="34"
                  />
                </a>
              </Link>
            </ImageContainer>
          ) : null}
        </HeaderMenuToggleWrapper>
        <HeaderNavbar isCollapsed={isNavbarMenuOpen}>
          <TopMenu isCollapsed={isNavbarMenuOpen} />
          <Menu isCollapsed={isNavbarMenuOpen} categories={categories} />
        </HeaderNavbar>
      </HeaderMenu>
    </>
  )
  const categoryHeaderMobile = () => (
    <>
      <HeaderMenu>
        <HeaderMenuToggleWrapper>
          <HeaderMenuToggle
            isCollapsed={isNavbarMenuOpen}
            onToggle={() => setIsNavbarMenuOpen(!isNavbarMenuOpen)}
          />
          {isMobileDevice ? (
            <ImageContainer>
              <Link href="/" passHref>
                <a>
                  <Image
                    quality={100}
                    src={Logotipo}
                    alt="Logotipo Sheshe"
                    width="100"
                    height="34"
                  />
                </a>
              </Link>
            </ImageContainer>
          ) : null}
        </HeaderMenuToggleWrapper>
        <HeaderNavbar isCollapsed={isNavbarMenuOpen}>
          <TopMenu isCollapsed={isNavbarMenuOpen} />
          <Menu isCollapsed={isNavbarMenuOpen} categories={categories} />
        </HeaderNavbar>
      </HeaderMenu>
      <HeaderMobile>
        <HeaderMobileContent>
          <TextContainer
            mobileOnToggle={isMobileDevice && (isNavbarMenuOpen as boolean)}
          >
            <Text as="h1" heading={600} color={colors.white}>
              {categoryFound?.name}
            </Text>
          </TextContainer>
          <Image
            alt={categoryFound?.image.alt}
            src={categoryFound?.image.src as string}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={rgbDataURL(135, 104, 55)}
            quality={100}
            className="header-image"
            priority
          />
        </HeaderMobileContent>
      </HeaderMobile>
    </>
  )

  const categoryHeader = () => (
    <HeaderImage>
      <Image
        alt={categoryFound?.image.alt}
        src={categoryFound?.image.src as string}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={rgbDataURL(135, 104, 55)}
        quality={100}
        className="header-image"
      />
      <HeaderMenu
        onMouseEnter={() => setHeaderMenuOver(true)}
        onMouseLeave={() => setHeaderMenuOver(false)}
        mouseOver={headerMenuOver}
      >
        <HeaderNavbar isCollapsed={isNavbarMenuOpen}>
          <TopMenu color={headerMenuOver ? colors.black : colors.white} />
          <Menu
            color={headerMenuOver ? colors.black : colors.white}
            categories={categories}
          />
        </HeaderNavbar>
      </HeaderMenu>
      <TextContainer>
        <Text as="h1" heading={600} color={colors.white}>
          {categoryFound?.name}
        </Text>
      </TextContainer>
    </HeaderImage>
  )
  return (
    <HeaderContainer>
      {isCategoryPage && isMobileDevice && categoryHeaderMobile()}
      {isCategoryPage && !isMobileDevice && categoryHeader()}
      {isProductPage && productPageHeader()}
      {!isCategoryPage && !isProductPage && homePageHeader()}
    </HeaderContainer>
  )
}

export default Header
