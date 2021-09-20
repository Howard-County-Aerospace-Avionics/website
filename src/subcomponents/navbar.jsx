import styled from 'styled-components'
import { Theme } from '../styles'
import { motion } from 'framer-motion'

export const Nav = styled(motion.nav)`
  position: absolute;
  height: 90px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  margin: 0;
  width: 100%;
  background: white;
  box-shadow: ${({ active }) =>
    active ? `0px 2px 4px rgba(0, 0, 0, 0.25)` : `none`};
  transition: all 0.3s ease-in-out;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  margin: 0;
  width: 100%;
`

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 20px;
`

export const NavIcon = styled.div`
  margin-right: 0.5rem;
  height: 60px;
  width: 60px;
  background-image: url('/images/hocoaerologo.svg');
  background-size: 100%;
  position: center;
  background-repeat: no-repeat;
`

export const NavHeading = styled.div`
  color: ${Theme.colors.primary.dark};
  font-family: Mina;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  display: inline;
  margin-left: 10px;
  @media screen and (max-width: 1360px) {
    font-size: 16px;
  }
`

export const MobileIcon = styled.div`
  display: none;
  color: black;
  @media screen and (max-width: 1360px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 90%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const DashButton = styled.button`
  font-size: 1.1rem;
  position: absolute;
  width: 200px;
  right: 3%;
  top: 20px;
  height: 50px;
  margin: auto;
  color: #fff;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: Mina;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    position: relative;
    right: 0;
    top: 0;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1360px) {
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 90px);
    position: absolute;
    top: 90px;
    filter: ${({ click }) => (click ? `blur(0px)` : `blur(10px)`)};
    display: ${({ click }) => (click ? `block` : `none`)};
    opacity: 1;
    transition: all 0.5s ease;
    background: white;
  }
`

export const NavItem = styled(motion.li)`
  border-bottom: 2px solid transparent;
  font-family: Mina;
  position: relative;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1360px) {
    margin-left: 50px;
  }
`

export const NavIndicator = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  left: calc(calc(100% - 60px) / 2);
  content: '';
  display: block;
  width: 60px;
  background-color: ${({ active }) =>
    active ? Theme.colors.primary.main : 'transparent'};
  height: 5px;
  border-radius: ${Theme.borderRadius.medium};

  @media screen and (max-width: 1360px) {
    top: 5%;
    height: 90%;
    left: -15px;
    width: 5px;
  }
`

export const NavLinks = styled.a`
  font-size: 1.1rem;
  color: ${({isActive, color}) => isActive ? color : '#000'};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem 0 2rem;
  height: 100%;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({color}) => color || '#000'};;
  }

  @media screen and (max-width: 1360px) {
    text-align: left;
    padding: 2rem 0;
    width: 100%;
    display: table;
  }
`