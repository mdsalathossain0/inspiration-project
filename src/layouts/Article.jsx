import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ArticleButton from '../components/ArticleButton'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'

import FreelanceOne from '../assets/freelanceone.png'
import FreelanceTwo from '../assets/freelancetwo.png'
import { MdAccessTimeFilled } from 'react-icons/md'


const Article = () => {
    return (

        <section className='bg-second py-12'>
            <Container>
                <Flex className='justify-between pb-5'>
                    <h2 className='text-4xl text-first font-semibold font-inter'>Latest Articles</h2>
                    <span className='text-xl text-third font-semibold font-inter cursor-pointer'>view all</span>
                </Flex>
                <Flex className='flex-wrap gap-7'>
                    <div className='w-[712px] h-[402px] bg-gradient-to-r from-[#CCFBF1] via-[#BBDCE9] to-[#99F6E4] rounded-[28px] relative overflow-hidden'>
                        <div className='pt-8 pl-11'><ArticleButton className='text-[#0F766E]' text='Freelance' /></div>
                        <div className=' pl-11'>
                            <Heading className='pt-[180px] pb-4.5' text='Freelancer & WFH' />
                            <SubHeading className='w-[364px] text-[#648E9E]' text='Learn how to be a freelancer, work and stay at home as you want...' extratext='read more' />
                        </div>
                        <div className='w-[180px] h-[270px]  rounded-[20px] absolute -top-[25px] left-[300px]' >
                            <Image className='w-full h-full' src={FreelanceOne} />
                        </div>
                        <div className='w-[180px] h-[270px]  rounded-[20px] absolute -bottom-[17px] right-[60px] '>
                            <Image className='w-full h-full ' src={FreelanceTwo} />
                        </div>
                    </div>
                    <div className='w-[456px] h-[402px] bg-gradient-to-r from-[#FFEDD5]  to-[#FED7AA] rounded-[28px] relative overflow-hidden'>

                    <div>
                    <div className='pt-8 pl-11'><ArticleButton className='text-[#0F766E]' text='Freelance' /></div>
                    <div className='flex justify-center gap-x-2 pt-2 pb-12'>
                        <div className='w-[75px] h-[75px] bg-first rounded-full self-end mt-[10px] flex items-center justify-center'>
                        <MdAccessTimeFilled className='text-[26px] text-[#FDBA74]' /> 
                        </div>
                        <div className='w-[130px] h-[130px] bg-first rounded-full flex items-center justify-center'>
                        <MdAccessTimeFilled className='text-[46px] text-[#FDBA74]' />
                        </div>
                        <div className='w-[75px] h-[75px] bg-first rounded-full self-end mt-[10px] flex items-center justify-center'>
                        <MdAccessTimeFilled className='text-[26px] text-[#FDBA74]' />
                        </div>
                    </div>
                        <div className=' pl-11'>
                            <Heading className=' pb-4.5' text='Pomodoro Method' />
                            <SubHeading className='w-[350px] text-[#C07E63]' text='Learn how to be a programmer, work and managing time with pomodoro... ' extratext='read more' />
                        </div>
                    </div>

                    </div>
                    <div className='w-[468px] h-[402px] rounded-[28px]'></div>
                    <div className='w-[700px] h-[402px] rounded-[28px]'></div>
                    <div className='w-[1200px] h-[402px] rounded-[28px]'></div>
                </Flex>
            </Container>
        </section>
    )
}

export default Article