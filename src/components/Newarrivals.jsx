import React, { useState,useEffect, useContext } from 'react'
import Container from './Container'
import Flex from './Flex'
import ArrivalsItem from './ArrivalsItem'
import { apiData } from './ContextApi'


const Newarrivals = () => {
    let data = useContext(apiData)    

  return (
   <section>
    <Container>
        <h2 className='text-[#262626] font-sans text-[36px] font-bold'>New Arrivals</h2>
        <Flex className="justify-between flex-wrap">
            {data.map((item)=>(
            <ArrivalsItem item={item}/>
            ))}
        </Flex>
    </Container>
   </section>
  )
}

export default Newarrivals