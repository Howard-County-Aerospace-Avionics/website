import React, { useState, useEffect, useContext } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Theme } from '../styles'
import { useViewportScroll, AnimateSharedLayout } from 'framer-motion'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavHeading,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavIndicator
} from '../subcomponents/navbar.jsx'


const Navbar = () => {
  const { scrollYProgress } = useViewportScroll()
  const [click, setClick] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [active, setActive] = useState('Home')
  const handleClick = () => {
    if(!click){
      setClick(true)
    } else {
      setTimeout(() => setClick(false), 200)
    }
  }
  const closeMobileMenu = () => setClick(false)

  useEffect(() => {
    scrollYProgress.onChange(e =>
      e > 0.01 ? setShadow(true) : setShadow(false)
    )
  }, [scrollYProgress])

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav active={shadow} >
        <NavbarContainer>
          <NavLogo href='#home' onClick={closeMobileMenu}>
            <NavIcon />
            <NavHeading>Howard County Aerospace</NavHeading>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? (
              <FaTimes color={Theme.colors.primary.dark} />
            ) : (
              <FaBars color={Theme.colors.primary.dark} />
            )}
          </MobileIcon>
          <AnimateSharedLayout>
            <NavMenu onClick={handleClick} click={click}>
              {tabs.map((tab, index) => <Item tab={tab} key={index} isSelected={active == tab.name} onClick={setActive} />)}
            </NavMenu>
          </AnimateSharedLayout>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}

const Item = ({ tab, isSelected, onClick }) => {
  return (
    <NavItem>
      <NavLinks href={tab.link} onClick={() => onClick(tab.name)} color={tab.color} isActive={isSelected}>
        {tab.name}
      </NavLinks>
      {isSelected && (
        <NavIndicator 
        layoutId='outline'
          className='outline'
          initial={false}
          animate={{ backgroundColor: tab.color }}
          active={true}
          transition={spring}
        />
      )}
    </NavItem>
  )
}

export default Navbar

//const tabs = ['Team', 'Competition', 'Rocket', 'About', 'Contact']
const tabs = [
  { name: 'Home', link: '#home', color: Theme.colors.primary.main },
  { name: 'Team', link: '#team', color: Theme.colors.primary.light },
  { name: 'Competition', link: '#competition', color: Theme.colors.primary.dark },
  { name: 'Rocket', link: '#rocket', color: Theme.colors.secondary },
  { name: 'About', link: '#about', color: Theme.colors.primary.main },
  { name: 'Contact', link: '#contact', color: Theme.colors.primary.dark }
]

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30
}
