import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import GallaryOne from '../assets/gallaryone.png'
import GallaryTwo from '../assets/gallarytwo.png'
import GallaryThree from '../assets/gallarythree.png'
import GallaryFour from '../assets/gallaryfour.png'

const Gallary = () => {
  return (
    <section className='bg-second py-12'>
        <Container>
            <Flex className='justify-between pb-5  '>
                <h2 className='text-2xl sm:text-3xl px-3 md:px-0 md:text-4xl text-first font-semibold font-inter'>Galleries</h2>
                <span className='text-lg px-3 md:px-0 md:text-xl text-third font-semibold font-inter cursor-pointer'>view all</span>
            </Flex>
            <Flex className='md:justify-between flex-wrap justify-center gap-8 md:gap-0 py-5 md:py-0'>
                <div className='w-[280px] h-[350px] rounded-[28px]'>
                    <Image className='w-full h-full' src={GallaryOne}/>
                </div>
                <div className='w-[280px] h-[350px] rounded-[28px]'>
                    <Image className='w-full h-full' src={GallaryTwo}/>
                </div>
                <div className='w-[280px] h-[350px] rounded-[28px]'>
                    <Image className='w-full h-full' src={GallaryThree}/>
                </div>
                <div className='w-[280px] h-[350px] rounded-[28px]'>
                    <Image className='w-full h-full' src={GallaryFour}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Gallary