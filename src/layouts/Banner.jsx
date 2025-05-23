import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Image from '../components/Image'

import BannerImg from '../assets/banner.png'

const Banner = () => {
  return (
    <section className='bg-second relative py-[30px] md:py-[70px]'>

        <div className='bg-[#1D4ED8] absolute top-1/4 -translate-x-[50%] left-0 rounded-full blur-3xl w-[150px] h-[150px]'></div>
        <div className='bg-[#a21caf40] absolute top-1/4 left-1/2 rounded-full blur-3xl w-[120px] h-[120px]'></div>
        <div className='bg-[#1d4ed840] absolute top-1/4 right-0 rounded-full blur-3xl w-[250px] h-[250px]'></div>
        <Container>
            <Flex className='flex-col md:flex-row'>

                <div className='w-full sm:w-full md:w-6/12'>
                    <h1 className='text-4xl sm:text-[42px] px-3 md:px-0 md:text-[70px] text-transparent bg-gradient-to-r bg-clip-text from-[#1D4ED8] via-[#A21CAF] to-[#D946EF] font-bold font-fira md:leading-[84px] tracking-[2px] md:pt-[80px]'>Inspiration is everywhere</h1>
                    <p className='w-auto md:w-[437px] text-sm px-3 md:px-0 md:text-[15px]  text-[#E5E7EB] font-medium font-inter leading-7
                    py-7'>There is no passion to be found playing small in settling for a life that is less than the one you are capable of living</p>
                    <Button className='mx-3 md:mx-0 text-base text-first font-medium font-inter py-5 px-10 bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#D946EF] rounded-[6px]' text='Get started'/>
                </div>
                <div className=' w-full sm:w-full md:w-6/12'>
                    <div className='pt-8 md:pb-0'>
                        <Image src={BannerImg}/>
                    </div>
                </div>

            </Flex>
        </Container>

    </section>
  )
}

export default Banner