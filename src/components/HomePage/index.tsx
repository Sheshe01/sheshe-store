import React from 'react'
import { Container } from 'components/structure/Container'
import DesignersCategory from './DesignersCategory'
import CallToAction from './CallToAction'
import { HomePageProps } from './types'

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const { homePageData } = data
  const { designersSection, callToActionSection } = homePageData

  return (
    <React.Fragment>
      <DesignersCategory
        designers={designersSection.designers}
        title={designersSection.title}
        url={designersSection.url}
      />

      <CallToAction data={callToActionSection} />
    </React.Fragment>
  )
}

export default HomePage
