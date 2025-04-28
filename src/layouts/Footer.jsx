import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import FooterList from '../components/FooterList'
import Image from '../components/Image'

import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='bg-second py-10 md:py-20'> 
        <Container>
            <div className=' rounded-t-[28px]'>
            <Flex className='flex-col md:flex-row items-center gap-y-8 md:gap-y-0 text-center md:text-start'>
                <div className='w-auto md:w-3/12'>
                    <Flex className='flex-col gap-y-7'>
                        <FooterList text='Home'/>
                        <FooterList text='How it works'/>
                        <FooterList text='Our experts'/>
                        <FooterList text='Become a partner'/>
                    </Flex>
                </div>
                <div className='w-auto md:w-5/12'>
                <Flex className='flex-col gap-y-7'>
                        <FooterList text='Public reviews'/>
                        <FooterList text='Privacy guide'/>
                        <FooterList text='Term conditions'/>
                        <FooterList text='Help & support'/>
                    </Flex>
                </div>
                <div className='w-auto md:w-4/12'>
                    <Flex className='gap-x-4 items-center justify-center md:justify-start'>
                        <div className='w-[40px] h-[40px]'><Image className='w-full h-full' src={Logo}/></div>
                        <h6 className='text-[26px] font-medium font-sand bg-gradient-to-r bg-clip-text text-transparent from-[#2F79CB] to-[#AF51C5]'>Lunchpiration</h6>
                    </Flex>
                    <p className='w-auto md:w-[327px] text-sm md:text-base text-first font-normal font-inter leading-6 pt-6 pb-7'>All media, contents, articles and everything here are have copyright material and law.</p>
                    <p className='w-auto md:w-[327px] text-sm md:text-base text-first font-normal font-inter leading-6 pt-6 pb-7'>© 2021 Lunchpiration Media Limited.</p>
                </div>
            </Flex>
            </div>
        </Container>
    </footer>
  )
}

export default Footer