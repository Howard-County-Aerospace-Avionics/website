import styled from 'styled-components'
import React from 'react'
import { Theme } from '../styles'
import { data } from '../data/index'

const SocialWrapper = styled.div`
  width: ${({width}) => width * 100 + 'px'};
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  color: ${({ color }) => 
    color
  };
  background-color: ${({ backgroundColor }) => 
    backgroundColor
  };
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${Theme.borderRadius.default};
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
`
const socials = data.socials

const Socials = () => {
  return (
    <SocialWrapper width={socials.length}>
      {
        socials.map(({ alt, backgroundColor, color, icon, link }) => (
          <SocialIcon
            key={alt}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            backgroundColor={backgroundColor}
            color={color}
          >{icon}</SocialIcon>
          ))
      }
    </SocialWrapper>
  )
}

export default Socials
