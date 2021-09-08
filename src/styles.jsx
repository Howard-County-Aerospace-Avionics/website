import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
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
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100vh;
`;

export const Button = styled.button`
    //Button
    border-radius: 5px;
    background: #FF2E53;
    outline: none;
    border: none;
    cursor: pointer;
    width: 150px;
    height: 50px;
    // border: 2px solid #fff;

    
    //Text
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #fff;
    transition: all 0.25s ease-out;


    &:hover {
        background: #EE274B;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
    }

    &:active {
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
    }

`

export const H1 = styled.h1`
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 91px;
    color: #000000;

    @media screen and (max-width: 820px) {
      font-size: 45px;
      line-height: 68px;
    };

`

export const H2 = styled.h2`
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 91px;

    @media screen and (max-width: 820px) {
      font-size: 40px;
      line-height: 61px;
    };
`

export const H3 = styled.h3`
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 62px;
`

export const H4 = styled.h4`
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 39px;
`

export const Subtitle1 = styled.p`
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    /* identical to box height */
    color: #CFCFCF;
`

export const P = styled.p`
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
`

export const Input = styled.input`
  height: 50px;
  width: 100%;
  background: #F5F5F5;
  border: 2px solid #EBEBEB;
  border-radius: 5px;
  padding-left: 15px;
  outline: none;
  font-size: 15px;

  
  &::placeholder {
    color: '#EBEBEB';
  };


  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  };

`

export const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
      <a className={className}>{children}</a>
  </Link>
)

export const LinkWrapper = styled(StyledLink)`
    text-decoration:none;
`;

export const LinkHighlight = styled.span`
`


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
};

export const Theme = {
    colors: {
      primary: '#0f1234', //navy blue
      secondary: '#404572', //light indigo
      tertiary: '#8b8fb4', //yellow
      quaternary: '#688c72', //purple
      grey: '#d8d6e5', //grey
      lightGrey: '#b6b4c3', //light grey
      veryLightGrey: '#F5F5F5',  //light grey
      background: '#fff', //white
      lightBackground: '#FFFCF8', //very light beige
      // success: '#43D4A0', //green
      success: '#1ACC8C',
      darkerPrimary: '#EE274B', //darker red
      darkerSecondary: '#3991E3', //darker blue
      darkerTertiary: '#EDC013', //darker yellow
      darkerQuaternary: '#984CC9', //darker purple
      pinkGrey: '#F0EEEF',
    },

export default GlobalStyle;