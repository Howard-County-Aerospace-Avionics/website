import styled, { createGlobalStyle } from 'styled-components'
import Link from 'next/link'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Mina', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  body {
    background: #fff
  } 
   
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #FAFAFA;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #C1C1C1;
    border-radius: 5px;
  }

  ::selection {
    background: #3DA1FF; /* WebKit/Blink Browsers */
    color: #fff;
  }
  ::-moz-selection {
    background: #3DA1FF; /* Gecko Browsers */
    color: #fff;
  }

body
    {
    overscroll-behavior-y: contain;
    }
 } 
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100vh;
`

export const Button = styled.button`
  //Button
  background: #36454f;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 200px;
  height: 60px;
  // border: 2px solid #fff;

  //Text
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-transform: uppercase;

  color: #fff;
  transition: all 0.1s ease-out;

  &:hover {
    background: #a7c7e7;
    color: #36454f;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`

export const H1 = styled.h1`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 91px;
  color: #000000;

  @media screen and (max-width: 820px) {
    font-size: 45px;
    line-height: 68px;
  }
`

export const H2 = styled.h2`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 91px;

  @media screen and (max-width: 820px) {
    font-size: 40px;
    line-height: 61px;
  }
`

export const H3 = styled.h3`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 62px;
`

export const H4 = styled.h4`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 39px;
`

export const Subtitle1 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  color: #cfcfcf;
`

export const P = styled.p`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 27px;
`

export const Input = styled.input`
  height: 50px;
  width: 100%;
  background: #f5f5f5;
  border: 2px solid #ebebeb;
  border-radius: 5px;
  padding-left: 15px;
  outline: none;
  font-size: 15px;

  &::placeholder {
    color: '#EBEBEB';
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`

export const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export const LinkWrapper = styled(StyledLink)`
  text-decoration: none;
`

export const LinkHighlight = styled.span``

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

export const Theme = {
  colors: {
    primary: {
      main: '#6F8FAF', //navy blue
      light: '#A7C7E7', //dark blue
      dark: '#36454F' //darker blue
    },
    secondary: '#8B0000', //purple
    grey: '#C0C0C0', //grey
    background: '#E5E4E2', //white
    success: '#1ACC8C'
  },
  borderRadius: {
    default: '5px',
    small: '2px',
    medium: '5px',
    large: '10px'
  },
  breakpoints: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`
  },
  spacing: {
    default: '16px',
    small: '8px',
    medium: '16px',
    large: '24px'
  }
}

export default GlobalStyle
