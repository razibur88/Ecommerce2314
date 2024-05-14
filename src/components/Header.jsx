import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
    let [show, setShow] = useState(false)
  return (
   <header className='lg:h-[80px] h-[20px]'>
     <Container>
        <Flex className="justify-between items-center lg:h-[80px] h-[20px]" >
            <div className="w-1/4">
                <img src={Logo} alt="logo" />
            </div>
            <div className="w-3/4">
                <ul className={`lg:flex justify-center gap-x-10 absolute lg:static duration-700 ease-out ${show == true ? "bg-[gray] top-[50px] left-0 w-full" : "top-[50px] left-[-200px]" }`}>
                    <li className='font-sans text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]'>
                    <Link to="/">Home</Link>
                    </li>
                    <li className='font-sans text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]'>
                        <Link to="/product">Shop</Link>
                    </li>
                    <li className='font-sans text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]'>About</li>
                    <li className='font-sans text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]'>Contacts</li>
                    <li className='font-sans text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]'>Journal</li>
                </ul>
            </div>
            <div className="lg:hidden" onClick={()=>setShow(!show)}>
                {show == true ? <RxCross2/> : <FaBars/>}
            </div>

        </Flex>
    </Container>
   </header>
  )
}

export default Header