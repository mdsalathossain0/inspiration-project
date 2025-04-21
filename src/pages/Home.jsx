import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import Icon from '../assets/react.svg'
import List from '../components/List'
import Button from '../components/Button'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'


const Home = () => {
  return (
    <Container>
      <Flex className='gap-x-[100px]'>
        <List />

        <Image className='w-[300px]' src={Icon}/>
        <Button text='Login'/>
      </Flex>
      <Heading text='Abu Salat Lemon'/>
      <SubHeading text='Hello World' extratext='read more'/> 
    </Container>
  )
}

export default Home