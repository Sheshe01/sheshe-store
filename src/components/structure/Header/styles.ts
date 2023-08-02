import styled from 'styled-components'
import media from 'styles/media'
import MenuToggle from './MenuToggle'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.x4};
  align-items: center;
  justify-content: center;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  a {
    margin-left: auto;
    border: 1px solid transparent;
    :hover,
    :focus {
      outline: 1;
      border-color: ${({ theme }) => theme.colors.orange.extraBold};
    }
  }
`

export const HeaderMenu = styled.div<{ mouseOver?: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.x4};
  align-items: center;
  justify-content: center;

  ${media.lessThan('tablet')`
    width:100%;

    align-items: flex-start;
    justify-content: flex-start;
 `}
  ${({ theme, mouseOver }) => `
    ${
      mouseOver &&
      `
          background-color:${theme.colors.white};
      `
    }
  `}
`

export const HeaderMenuToggleWrapper = styled.div`
  display: none;
  ${media.lessThan('tablet')`
    width:80%;
    display: flex;
    margin: 0 auto;
 `}
`

export const HeaderMenuToggle = styled(MenuToggle)``

export const HeaderNavbar = styled.div<{ isCollapsed: boolean }>`
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme, isCollapsed }) => media.lessThan('tablet')`
    position: absolute;
    top: 50px;
    left: 0;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    transition-property: all;
    transition-duration: 500ms;

    background-color: ${theme.colors.orange.extraBold};

    overflow: hidden;

    width: 100vw;
    height: 100vh;

    ${
      !isCollapsed &&
      `
        height: 0;
        opacity: 0;
      `
    }
  `}
`
export const HeaderImage = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background: black;
  .header-image {
    opacity: 0.5;
  }
`

export const TextContainer = styled.div<{ mobileOnToggle?: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.x4};
  ${({ mobileOnToggle }) => media.lessThan('tablet')`
    width:80%;
    display: flex;
    margin: 0 auto;
    ${
      mobileOnToggle &&
      `
        display:none;
      `
    }
 `}
`

export const HeaderMobile = styled.div`
  width: 100%;
  overflow: hidden;
`
export const HeaderMobileContent = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.x4};
  align-items: center;
  justify-content: center;
  background: #000000;
  img {
    opacity: 0.5;
  }
`
