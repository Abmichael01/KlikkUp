import AboutUs from '@/components/Home/AboutUs'
import Banner1 from '@/components/Home/Banner1'
import Banner2 from '@/components/Home/Banner2'
import FAQ from '@/components/Home/FAQ.'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import HowItWorks from '@/components/Home/HowItWorks'
import RegisterNow from '@/components/Home/RegisterNow'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import WhyJoin from '@/components/Home/WhyJoin'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
        <Hero />
        <Features />
        <AboutUs />
        <HowItWorks />
        <Banner2 />
        <RegisterNow />
        <WhyJoin />
        <Banner1 />
        <WhyChooseUs />
        <FAQ />
    </div>
  )
}

export default Home