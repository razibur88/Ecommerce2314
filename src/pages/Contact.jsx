import React from 'react'
import Container from '../components/Container'

const Contact = () => {
    return (
        <section className='py-[124px]'>
            <Container>
                <div className="">
                    <div className="">
                        <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Contacts</h2>
                    </div>
                    <div className="py-[100px]">
                        <div className="lg:w-[50%] w-full">
                            <h3 className='font-sans font-bold   text-[42px]  text-[#262626] '>Fill up a Form</h3>
                            <div className="relative pt-5">
                                <h2 className='font-sans font-bold   text-[22px]  text-[#262626] '>Name :</h2>
                                <input placeholder='Your name here' type="search" className='lg:w-full w-full  lg:h-[50px]  h-[50px] top-[50px] border-b-2  outline-none  rounded-lg' />


                            </div>
                            <div className="relative pt-5">
                                <h2 className='font-sans font-bold   text-[22px]  text-[#262626] '>Email :</h2>
                                <input placeholder='Your Email here' type="search" className='lg:w-full w-full  lg:h-[50px]  h-[50px] top-[50px] border-b-2  outline-none  rounded-lg' />


                            </div>
                            <div className="relative pt-5">
                                <h2 className='font-sans font-bold   text-[22px]  text-[#262626] '>Message :</h2>
                                <input placeholder='Your Message here' type="search" className='lg:w-full w-full  lg:h-[50px]  h-[50px] top-[50px] border-b-2  outline-none  rounded-lg' />

                            </div>
                            <div className="h-[50px] w-[180px] bg-[#000] my-[100px] items-center">
                                <h5 className='font-sans font-bold   text-[16px]  text-[#fff] text-center leading-[50px]'>Post</h5>
                            </div>

                        </div>
                        <div className="pt-[50px]">
                        <iframe className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.17039206647!2d90.37999990952784!3d23.741302478587663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1719466214680!5m2!1sen!2sbd"></iframe>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact