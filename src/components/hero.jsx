import styled from 'styled-components'
import React from 'react'

import { Theme, Button } from '../styles'

const HeroWrapper = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const HeroLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  background-image: url('/images/howcoaerologo.svg');
  background-size: 300%;
  background-repeat: no-repeat;
  background-position: center;
`

export const HeroHeading = styled.div`
  position: absolute;
  top: 0;
  left: 150px;
  height: 150px;
  color: ${Theme.colors.primary.dark};
  font-family: Mina;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 120px;
`

const HeroTopBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60%;
`

const HeroBottomBackground = styled.div`
  position: absolute;
  top: ${({ offSet }) => offSet};
  right: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: ${({ color }) => color};
  z-index: 0;
  transform: skewY(-5deg);
  transform-origin: top right;
  /* box-shadow: ${({ offSet }) =>
    offSet == '60%' && `0px 0px 20px 0px rgba(0, 0, 0, 0.5);`}; */
`

const Hero = ({id}) => {
  return (
    <HeroWrapper id={id}>
      <HeroTopBackground />
      {/* <HeroLogo /> */}
     {/*  <HeroHeading>Howard County Aerospace</HeroHeading> */}
      <HeroBottomBackground offSet={'30%'} color={Theme.colors.primary.main} />
      <HeroBottomBackground offSet={'60%'} color={Theme.colors.primary.dark} />
    </HeroWrapper>
  )
}

export default Hero
