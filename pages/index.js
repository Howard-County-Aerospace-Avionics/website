import React, { useRef } from 'react'
import styled from 'styled-components'
import InfoSection from '../src/components/infoSection'
import {
  AnimatedSectionDivider,
  BottomSectionDivider
} from '../src/components/sectionDivider'
import Data, { data } from '../src/data/index'
import Hero from '../src/components/hero'
import MediaSection from '../src/components/media'
import Navbar from '../src/components/navbar'

const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

export default function Home () {
  const ref = useRef()

  return (
    <PageWrapper ref={ref} id={'home'}>
      <Navbar/>
      <Hero/>
      <InfoSection {...data.membership} id={'team'}/>
      {/* <SectionDivider /> */}
      <MediaSection id={'competition'}/>
      {/* <InfoSection
        {...data.social}
      />
      <InfoSection
        {...data.team}
      />
      <InfoSection
        {...data.subteam}
      />
      <InfoSection
        {...data.sponsor}
      />
      <InfoSection
        {...data.members}
      />
      <InfoSection
        {...data.background}
      />
      <InfoSection
        {...data.competition}
      /> */}
    </PageWrapper>
  )
}
