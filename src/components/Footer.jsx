import React from 'react'
import Logo from "../assets/logo.png"
import { FaFacebookF,FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-[#F5F5F3]'>
    <div className="container mx-auto px-[20px] md:px-[0px]">
        <div className="main py-[55px] md:flex md:justify-between">
        <div className="w-[100%] md:w-[40%]">
        <div className="ul_box flex justify-between">
            <ul className='w-[33.3333333%] md:text-start'>
                <li className='font-sans text-[16px] font-bold leading-[23px] pb-[10px]'>MENU</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Home</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Shop</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>About</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Contect</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Journal</li>
            </ul>
            <ul className='w-[33.3333333%]'>
                <li className='font-sans text-[16px] font-bold leading-[23px] pb-[10px]'>SHOP</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Category 1</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Category 2</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Category 3</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Category 4</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Category 5</li>
            </ul>
            <ul className='w-[33.3333333%]'>
                <li className='font-sans text-[16px] font-bold leading-[23px] pb-[10px]'>HELP</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Privacy Policy</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Terms & Conditions</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Special E-shop</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Shipping</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Secure Payments</li>
            </ul>
        </div>
    </div>
    <div className="w-[100%] flex flex-wrap md:w-[60%]">
        <ul className='w-[100%] md:w-[50%] pt-[0px]'>
            <li className='text-[16px] text-[#262626] font-[700] font-sans'>+880 1813 90 42 57</li>
            <li className='text-[16px] text-[#262626] font-[700] font-sans'>gmalsiam4200@gmail.com</li>
            <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>575 Crescent Ave. Quakertown, PA 18951</li>
        </ul>
        <div className="mt-[30px] md:mt-0 w-[100%] md:w-[50%] image">
            <img src={Logo} alt="" />
        </div>
    </div>
        </div>
        <div className=" md:pt-[65px] pt-[30px] pb-[30px] md:justify-between flex flex-wrap justify-center">
        <div className=" flex gap-x-[10px]">
                <FaFacebookF/>
                <FaLinkedinIn/>
                <FaInstagram/>
        </div>
        <span className=' text-center font-sans text-[14px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</span>

        </div>
    </div>
</section>
  )
}

export default Footer