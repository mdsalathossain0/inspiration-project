import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import List from '../components/List'
import Button from '../components/Button'

import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { IoReorderThreeSharp } from 'react-icons/io5'
import { GiCrossedSwords } from 'react-icons/gi'

const Nav = () => {
    let [click, setclick]=useState(false)

   let handleClick=()=>{
    setclick(!click)
   }

    
  return (
    
    <>
    <nav className='bg-second py-12 hidden lg:block'>
        <Container>
        <Flex className='items-center'>
            <div className='w-3/12'>
                <div>
                    <Link to='/'><Image src={Logo}/></Link>
                </div>
            </div>
            <div className='w-6/12'>
                <Flex className='gap-x-10 text-center justify-center items-center'>
                    <Link to='/featured'><List text='Featured'/></Link>
                    <Link to='/tutorial'><List text='Tutorial'/></Link>
                    <Link to='/freelance'><List text='Freelance'/></Link>
                    <Link to='/design'><List text='Design'/></Link>
                    <Link to='/freebies'><List text='Freebies'/></Link>
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
    <nav className='bg-second py-12 lg:hidden block'>
        <Container>
        <Flex className='items-center justify-between px-8'>
            <div >
                <div>
                    <Link to='/'><Image src={Logo}/></Link>
                </div>
            </div>
            <div onClick={handleClick}>
                {
                    click ? <GiCrossedSwords className='text-white text-xxl'/>:<IoReorderThreeSharp className='text-white text-[28px]'/>
                }

            </div>
            
        </Flex>
            {
                click && <div className='pt-10 pb-4 bg-[#636e72] mt-5'>
                <ul className='flex flex-col gap-y-5 items-center'>
                    <li><Link to='/featured'><List text='Featured'/></Link></li>
                    <li><Link to='/tutorial'><List text='Tutorial'/></Link></li>
                    <li><Link to='/freelance'><List text='Freelance'/></Link></li>
                    <li><Link to='/design'><List text='Design'/></Link></li>
                    <li><Link to='/freebies'><List text='Freebies'/></Link></li>
                </ul>
                <Flex className='gap-x-2 justify-center pt-5'>
                    <Button className='text-sm text-first font-medium  font-inter py-3 px-6 rounded-[5px] bg-fourth shadow-2xl hover:bg-[#f9fafb40]  duration-300' text='Login'/>
                    <Button className='text-sm text-first font-medium  font-inter py-3 px-6 rounded-[5px] shadow-2xl bg-[#f9fafb40] hover:bg-fourth duration-300 ' text='Signup'/>
                </Flex>
            </div>
            }
        </Container>
    </nav>
    </>
  )
}

export default Nav