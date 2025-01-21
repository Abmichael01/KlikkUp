import Banner1 from '@/components/Home/Banner1'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import HowItWorks from '@/components/Home/HowItWorks'
import RegisterNow from '@/components/Home/RegisterNow'
import WhyJoin from '@/components/Home/WhyJoin'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-20'>
        <Hero />
        <Features />
        <HowItWorks />
        <RegisterNow />
        <WhyJoin />
        <Banner1 />
    </div>
  )
}

export default Home