import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import List from '../components/List'
import Button from '../components/Button'

import Logo from '../assets/logo.png'

const Nav = () => {
  return (
    
    <nav className='bg-second py-12'>
        <Container>
        <Flex className='items-center'>
            <div className='w-3/12'>
                <div>
                    <Image src={Logo}/>
                </div>
            </div>
            <div className='w-6/12'>
                <Flex className='gap-x-10 text-center justify-center items-center'>
                    <List text='Featured'/>
                    <List text='Tutorial'/>
                    <List text='Freelance'/>
                    <List text='Design'/>
                    <List text='Freebies'/>
                </Flex>
            </div>
            <div className='w-3/12 '>
                <Flex className='gap-x-2 justify-end'>
                    <Button className='text-sm text-first font-medium  font-inter py-3 px-6 rounded-[5px] bg-fourth shadow-2xl hover:bg-[#f9fafb40]  duration-300' text='Login'/>
                    <Button className='text-sm text-first font-medium  font-inter py-3 px-6 rounded-[5px] shadow-2xl bg-[#f9fafb40] hover:bg-fourth duration-300 ' text='Signup'/>
                </Flex>
            </div>
        </Flex>
        </Container>
    </nav>
  )
}

export default Nav