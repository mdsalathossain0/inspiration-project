import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ArticleButton from '../components/ArticleButton'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Button from '../components/Button'

import FreelanceOne from '../assets/freelanceone.png'
import FreelanceTwo from '../assets/freelancetwo.png'
import TeamOne from '../assets/team1.png'
import TeamTwo from '../assets/team2.png'
import TeamThree from '../assets/team3.png'
import TeamFour from '../assets/team4.png'
import TeamFive from '../assets/team5.png'
import TeamSix from '../assets/team6.png'
import TeamSeven from '../assets/team7.png'
import CollectOne from '../assets/collect1.png'
import CollectTwo from '../assets/collect2.png'
import CollectThree from '../assets/collect3.png'
import CollectFour from '../assets/collect4.png'
import CollectFive from '../assets/collect5.png'
import CollectSix from '../assets/collect6.png'
import CollectSeven from '../assets/collect7.png'
import CollectEight from '../assets/collect8.png'
import { MdAccessTimeFilled } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'


const Article = () => {
    return (

        <section className='bg-second py-12'>
            <Container>
                <Flex className='justify-between pb-5'>
                    <h2 className='px-3 md:px-0 text-2xl sm:text-3xl md:text-4xl text-first font-semibold font-inter'>Latest Articles</h2>
                    <span className='px-3 md:px-0 text-lg md:text-xl text-third font-semibold font-inter cursor-pointer'>view all</span>
                </Flex>
                <Flex className='flex-wrap gap-5 md:gap-7'>
                    <div className='w-[350px] sm:w-[550px] mx-auto md:w-[712px] h-[402px] bg-gradient-to-r from-[#CCFBF1] via-[#BBDCE9] to-[#99F6E4] rounded-[28px] relative overflow-hidden'>
                        <div className='pt-5 md:pt-8 pl-5 md:pl-11'><ArticleButton className='text-[#0F766E]' text='Freelance' /></div>
                        <div className='pl-5 md:pl-11'>
                            <Heading className='pt-[180px] pb-4.5' text='Freelancer & WFH' />
                            <SubHeading className='w-[320px] md:w-[364px] text-[#648E9E]' text='Learn how to be a freelancer, work and stay at home as you want...' extratext='read more' />
                        </div>
                        <div className=' opacity-0 sm:opacity-100 md:opacity-100 w-[180px] h-[270px]  rounded-[20px] absolute  -top-[25px] sm:left-[190px] md:left-[300px]' >
                            <Image className='w-full h-full' src={FreelanceOne} />
                        </div>
                        <div className='opacity-0 sm:opacity-100 md:opacity-100 w-[180px] h-[270px]  rounded-[20px] absolute -bottom-[17px] sm:right-[10px] md:right-[60px] '>
                            <Image className='w-full h-full ' src={FreelanceTwo} />
                        </div>
                    </div>
                    <div className='w-[350px] mx-auto md:w-[456px] h-[402px] bg-gradient-to-r from-[#FFEDD5]  to-[#FED7AA] rounded-[28px]  overflow-hidden'>

                        <div>
                            <div className='pt-5 md:pt-8 pl-5 md:pl-11'><ArticleButton className='text-[#0F766E]' text='Freelance' /></div>
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
                            <div className='pl-5 md:pl-11'>
                                <Heading className=' pb-4.5' text='Pomodoro Method' />
                                <SubHeading className='w-[320px] md:w-[350px] text-[#C07E63]' text='Learn how to be a programmer, work and managing time with pomodoro... ' extratext='read more' />
                            </div>
                        </div>

                    </div>
                    <div className='w-[350px] mx-auto md:w-[468px] h-[402px] rounded-[28px] bg-gradient-to-r from-[#FEF9C3] to-[#FEF08A]'>
                        <div>
                            <div className='pt-5 md:pt-8 pl-5 md:pl-11'><ArticleButton className='text-[#0F766E]' text='Freelance' /></div>
                            <div className='flex justify-center gap-x-2 pt-2 pb-8 md:pb-12'>

                                <div className='w-[130px] h-[130px] bg-first rounded-full flex items-center justify-center'>
                                    <BsMessenger className='text-[46px] text-[#FDBA74]' />

                                </div>

                            </div>
                            <div className='pl-5 md:pl-11'>
                                <Heading className=' pb-4.5' text='Ready to Switch? It`s simple.' />
                                <SubHeading className='w-[320px] md:w-[350px] text-[#B49467]' text='Create any collection of items. For example, a selection of red jackets or whatever you... ' extratext='read more' />
                            </div>
                        </div>
                    </div>
                    <div className=' w-[350px] sm:w-[590px] mx-auto md:w-[700px] h-[402px] rounded-[28px] bg-gradient-to-r from-[#F3E8FF] to-[#D8B4FE]'>
                        <div>
                            <div className='pt-5 md:pt-8 pl-5 md:pl-11 pb-5 md:pb-12'><ArticleButton className='text-[#0F766E]' text='Freelance' /></div>
                            <div className='flex flex-col sm:flex-row md:flex-row px-11 sm:justify-between md:justify-between gap-5 md:gap-0'>

                                <div className='relative'>
                                    <div className='w-[84px] h-[84px] rounded-full '><Image className='w-full h-full' src={TeamOne}/>
                                    </div>
                                    <div className='w-[84px] [h-84px] rounded-full absolute top-0 left-14 flex items-center'><Image className='w-full h-full' src={TeamTwo}/></div>
                                    
                                </div>
                                <div className='flex relative'> 
                                    <div className='w-[84px] h-[84px] rounded-full absolute top-0 right-[200px] md:-left-[316px]'><Image className='w-full h-full' src={TeamThree}/></div>
                                    <div className='w-[84px] h-[84px] rounded-full absolute top-0 right-[150px] md:-left-[260px]'><Image className='w-full h-full' src={TeamFour}/></div>
                                    <div className='w-[84px] h-[84px] rounded-full absolute top-0 right-[100px] md:-left-[204px]'><Image className='w-full h-full' src={TeamFive}/></div>
                                    <div className='w-[84px] h-[84px] rounded-full absolute top-0 right-[50px] md:-left-[156px]'><Image className='w-full h-full' src={TeamSix}/></div>
                                    <div className='w-[84px] h-[84px] rounded-full absolute top-0 right-0 md:-left-[100px]'><Image className='w-full h-full' src={TeamSeven}/></div>
                                </div>

                            </div>
                            <div className='pl-5 md:pl-11'>
                                <Heading className=' pb-4.5 pt-[100px] md:pt-14' text='Build a solid team' />
                                <SubHeading className='w-[320px] md:w-[350px] text-[#746FA7]' text='If there’s anything on your mind, we’d love to hear from you... ' extratext='read more' />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-[350px] sm:w-[590px] mx-auto md:w-[1200px] h-[402px] rounded-[28px] bg-gradient-to-r from-[#FFF5FE] to-[#FBDDF7] '>
                        <div className='w-[150px] h-[150px] bg-[#ddb1e840] absolute top-0  left-1/3 blur-3xl'></div>
                         <Flex>
                            <div className='w-7/12 pl-5 md:pl-[60px]'>
                            <Heading className=' pb-4.5 pt-10 md:pt-[130px] ' text='Collect and Save Inspirations' />
                            <SubHeading className='w-auto sm:w-[320px] pb-6 text-[#9E69AA] ' text='Find inspiration has never been easier than it is now. '  />
                            <div>
                            <Button className='text-sm text-first font-medium font-inter py-5 px-9 rounded-[5px] bg-gradient-to-r from-[#AF51C5] to-[#6E297E]' text='Start exploring'/>
                            </div>
                            </div>
                            <div className='w-5/12 '>

                                <div className='flex gap-4'>
                                    <div className='one w-[148px] flex flex-col gap-y-4'>
                                        <div className='w-full h-[60px] rounded-b-[20px] '><Image className='w-full h-full' src={CollectOne}/></div>
                                        <div className='w-full h-[200px] rounded-[20px]'><Image className='w-full h-full' src={CollectTwo}/></div>
                                        <div className='w-full h-[110px] rounded-t-[20px]'><Image className='w-full h-full' src={CollectThree}/></div>
                                    </div>
                                    <div className='two w-[148px] gap-4  flex flex-col gap-y-4'>
                                        <div className='w-full h-[110px] rounded-b-[20px] '><Image className='w-full h-full' src={CollectFour}/></div>
                                        <div className='w-full h-[200px] rounded-[20px]'><Image className='w-full h-full' src={CollectFive}/></div>
                                        <div className='w-full h-[60px] rounded-t-[20px]'><Image className='w-full h-full' src={CollectSix}/></div>
                                    </div>
                                    <div className='three w-[190px] gap-4  flex flex-col gap-y-4'>
                                        <div className='w-full h-[210px] rounded-tr-[28px] rounded-bl-[20px] '><Image className='w-full h-full rounded-tr-[28px] rounded-bl-[20px]' src={CollectSeven}/></div>
                                        <div className='w-full h-[176px] rounded-tl-[20px] rounded-br-[28px]'><Image className='w-full h-full rounded-tl-[20px] rounded-br-[28px]' src={CollectEight}/></div>
                                        
                                    </div>
                                
                                </div>
                                
                            
                            
                            </div>
                         </Flex>

                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Article