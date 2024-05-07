import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa6";
import { FaSearch, FaUser, FaCartPlus } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import CartImg from "../assets/cart.png"
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [cartShow, setCartShow] = useState(false)
    let [usercartShow, setUsercartShow] = useState(false)
    let [userShow, setuserShow] = useState(false)
    let cartref = useRef()
    let userref = useRef()
    let userAccref = useRef()

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cartref.current.contains(e.target) == true) {
                setCartShow(!cartShow)
            } else {
                setCartShow(false)
                
            }
            if (userref.current.contains(e.target) == true) {
                setUsercartShow(!usercartShow)
            } else {
                setUsercartShow(false)
            }
            if (userAccref.current.contains(e.target) == true) {
                setuserShow(!userShow)
            } else {
                setuserShow(false)
            }
        })
    }, [cartShow,usercartShow,userShow])

    return (
        <nav className='bg-[#F5F5F3] py-4'>
        <Container>
            <Flex className="items-center">
                <div className="w-[30%] relative">
                    <div ref={cartref} className="flex items-center gap-x-3">
                        <FaBars />
                        <p className='font-sans hidden lg:block text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]'>Shop by Category</p>
                    </div>
                    {cartShow &&
                        <div className="absolute z-50 top-[50px] left-0 bg-[#262626] w-[300px]">
                            <ul className='py-4'>
                                <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Accesories</li>
                                <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Furniture</li>
                                <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Electronics</li>
                                <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Clothes</li>
                                <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Bags</li>
                                <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Home appliances</li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="w-[40%]">
                    <div className="relative">
                        <input placeholder='Search...' type="search" className='w-full h-[50px] border-2 border-[#262626] outline-none px-2' />
                        <div className="absolute top-[50%] right-4 translate-y-[-50%] ">
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="w-[30%] relative">
                    <div className="flex justify-end items-center gap-x-2">
                        <div className="flex" ref={userAccref}>
                            <FaUser />
                            <MdArrowDropDown />
                        </div>
                        <div ref={userref} className="">
                            <FaCartPlus />
                        </div>
                    </div>
                    {userShow &&
                  <div className="absolute z-50 top-[30px] right-0 w-[300px] bg-[#262626] py-3 px-6">
                    <ul className='font-sans text-[16px] font-normal text-[#FFFFFFB2]'>
                      <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>My Account</li>
                      <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Log in</li>
                      <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Sign Up</li>
                    </ul>
                  </div>
                }

                    {usercartShow &&
                        <div className="w-[360px] z-50 absolute bg-[#F5F5F3] top-[50px] right-0">
                            <div className="py-3 ">
                                <div className="flex justify-around items-center">
                                    <div className="">
                                        <img src={CartImg} alt="" />
                                    </div>
                                    <div className="">
                                        <h3>Black Smart Watch</h3>
                                        <h5>$44.00</h5>
                                    </div>
                                    <div className="">
                                        <RxCross2 />
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className='pl-4 py-3'>Subtotal: <span>$44.00</span></h3>
                                    <div className="flex justify-around">
                                        <div className="">
                                            <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px]' href="#">View Cart</a>
                                        </div>
                                        <div className="">
                                            <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px]' href="#">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }


                </div>
            </Flex>
        </Container>
        </nav>
    )
}

export default Navbar