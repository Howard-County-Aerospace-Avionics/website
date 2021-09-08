import styled from 'styled-components'
import InfoSection from '../src/components/infoSection'
import { AnimatedSectionDivider, BottomSectionDivider}  from '../src/components/sectionDivider'
import Data, { data } from '../src/data/index'
import Hero from '../src/components/hero'

const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

export default function Home () {
  return (
    <PageWrapper>
      <Hero />
      <InfoSection
        {...data.membership}
      />
      {/* <SectionDivider /> */}
      <InfoSection
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
      />
    </PageWrapper>
  )
}
