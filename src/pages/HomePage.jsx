import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { FeatureSection } from '../components/FeatureSection'
import { CallToAction } from '../components/CallToAction'

export const HomePage = () => {
  return (
    <>
        <HeroSection />
        <FeatureSection />
        <CallToAction />
    </>
  )
}
