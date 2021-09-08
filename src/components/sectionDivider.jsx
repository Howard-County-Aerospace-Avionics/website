import React, { useEffect, useState } from 'react'
import { Button, Theme, H2, P } from '../styles'
import styled from 'styled-components'

const SectionDividerWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 400px;
  position: relative;
  background: ${({ backgroundColor }) => backgroundColor};
`

const AnimationLayer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: circle 4s;
  animation-delay: ${({ animationDelay }) => animationDelay + 's'};
  animation-play-state: ${({ animate }) => (animate ? `running` : `paused`)};
  background: ${({ color }) => color};
  clip-path: circle(75%);
  z-index: ${({ z }) => z + 999};
  @keyframes circle {
    0% {
      clip-path: circle(0%);
    }
    75% {
      clip-path: circle(75%);
    }
    100% {
      clip-path: circle(75%);
    }
  }
`

const colors = [
  Theme.colors.secondary,
  Theme.colors.primary.main,
  Theme.colors.primary.light,
  Theme.colors.primary.dark
]
let index = 0

const AnimatedSectionDivider = ({ imageSrc }) => {
  const [animationColor, setAnimationColor] = useState(colors[1])
  const [previousColor, setPreviousColor] = useState(colors[0])

  const AnimatedComponent = React.memo(
    ({ animationColor, previousColor }) => {
      return (
        <SectionDividerWrapper backgroundColor={previousColor}>
          <AnimationLayer
            animate={true}
            animationDelay={0}
            color={animationColor}
            z={2}
          />
        </SectionDividerWrapper>
      )
    },
    [(animationColor, previousColor) => animationColor !== previousColor]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousColor(animationColor)
      setAnimationColor(colors[index++ % 4])
    }, 4000)
    return () => clearInterval(interval)
  }, [animationColor])
  return (
    <AnimatedComponent
      animationColor={animationColor}
      previousColor={previousColor}
      animationState={true}
    />
  )
}

const BottomSectionDividerWrapper = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
`

const BottomSectionDividerWrapperShape = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2c3e50;
  z-index: 0;
  transform: skewY(3deg);
  transform-origin: top right;
  
`

const BottomSectionDivider = () => {
  return <BottomSectionDividerWrapper >
    <BottomSectionDividerWrapperShape />
  </BottomSectionDividerWrapper>
}

export { AnimatedSectionDivider, BottomSectionDivider }
