import React from 'react'
import About01 from "../assets/About01.png"
import About02 from "../assets/About02.png"
import Container from '../components/Container'
import Flex from '../components/Flex'


const About = () => {
  return (
    <section className='py-[124px]'>
        <Container>
            <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>About</h2>
            <Flex className="justify-between py-[50px]">
               <div className="flex justify-between flex-wrap">
               <div className="lg:w-[49%] w-[100%] ">
                  <div className="relative  group overflow-hidden">
                  <img src={About01} alt="" />
                   <div className="absolute bottom-[40px] left-[50%] translate-x-[-50%] h-[50px] w-[150px] bg-black items-center">
                <h5 className='font-sans font-bold   text-[16px] text-[#fff] text-center leading-[50px]'>Our Brands</h5>
            </div>
                  </div>
                </div>
                <div className="lg:w-[49%] w-[100%]">
                <div className="relative  group overflow-hidden">
                <img src={About02} alt="" />
                <div className="absolute bottom-[40px] left-[50%] translate-x-[-50%] h-[50px] w-[150px] bg-black items-center">
                <h5 className='font-sans font-bold   text-[16px] text-[#fff] text-center leading-[50px]'>Our Brands</h5>
            </div>
                </div>
                </div>
               </div>
                
            </Flex>
            <div className="">
                    <p className='font-sans font-semibold   lg:text-[28px]   text-[#262626] '>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
                </div>
                <div className="flex justify-between flex-wrap py-10">
                    <div className="lg:w-[32%] w-full">
                        <h2 className='font-sans font-bold   text-[22px]  text-[#262626] ' >Our Vision</h2>
                        <p className='font-sans font-normal   text-[16px]  text-[#262626] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="lg:w-[32%] w-full">
                        <h2 className='font-sans font-bold   text-[22px]  text-[#262626]  ' >Our Story</h2>
                        <p className='font-sans font-normal   text-[16px]  text-[#262626] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                    </div>
                    <div className="lg:w-[32%] w-full">
                        <h2 className='font-sans font-bold   text-[22px]  text-[#262626] ' >Our Brands</h2>
                        <p className='font-sans font-normal   text-[16px]  text-[#262626] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                  
                </div>
        </Container>
    </section>
  )
}

export default About