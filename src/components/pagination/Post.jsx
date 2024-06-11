import React from 'react';
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Post = ({allData,categorySearchFilter}) => {
  return (
    <>
        {categorySearchFilter.length > 0 ?
            categorySearchFilter.map((item)=>(
                <div className='w-[32%] py-5'>
                <Link to={`/product/${item.id}`}>
                <div className="">
                <div className="relative group overflow-hidden">
                    <img src={item.thumbnail} className='h-[350px]' alt="sss" />
                    <div className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] flex items-center justify-end">
                        <ul className='pr-5'>
                            <li className='flex items-center justify-end gap-x-4'>Add to Wish List <FaHeart /></li>
                            <li className='flex items-center justify-end gap-x-4 py-2'>Compare <TfiReload /></li>
                            <li className='flex items-center justify-end gap-x-4'>Add to Wish List <FaHeart /></li>
                        </ul>
                    </div>
                </div>
               
                <div className="flex justify-between py-3">
                    <h2 className='text-[#262626] font-sans text-[16px] font-bold'>{item.title}</h2>
                    <p className='text-[#262626] font-sans text-[16px] font-bold'>${item.price}</p>
                </div>
                </div>
                </Link>
            </div>
            ))
        :
        allData.map((item)=>(
            <div className='w-[32%] py-5'>
            <Link to={`/product/${item.id}`}>
            <div className="">
            <div className="relative group overflow-hidden">
                <img src={item.thumbnail} className='h-[350px]' alt="sss" />
                <div className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] flex items-center justify-end">
                    <ul className='pr-5'>
                        <li className='flex items-center justify-end gap-x-4'>Add to Wish List <FaHeart /></li>
                        <li className='flex items-center justify-end gap-x-4 py-2'>Compare <TfiReload /></li>
                        <li  className='flex items-center justify-end gap-x-4'>Add To Cart<FaHeart /></li>
                    </ul>
                </div>
            </div>
           
            <div className="flex justify-between py-3">
                <h2 className='text-[#262626] font-sans text-[16px] font-bold'>{item.title}</h2>
                <p className='text-[#262626] font-sans text-[16px] font-bold'>${item.price}</p>
            </div>
            </div>
            </Link>
        </div>
        ))
        }

    </>
  )
}

export default Post