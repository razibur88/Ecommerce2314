import React, { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Post = ({allData,categorySearchFilter}) => {

    let [filterShow, setFilterShow] = useState([])
    let [cateShow, setCateShow] = useState(true)

    useEffect(()=>{
        let filterAmi = categorySearchFilter.slice(0,5)
        setFilterShow(filterAmi)
    },[categorySearchFilter])

    let handleShow = () =>{
        setFilterShow(categorySearchFilter)
        setCateShow(false)
    }

    let handleHide = ()=>{
        let filterAmi = categorySearchFilter.slice(0,5)
        setFilterShow(filterAmi)
        setCateShow(true)
    }


  return (
    <>
        {categorySearchFilter.length > 0 ?
            <div className="">
                <div className="flex flex-wrap">
                {filterShow.map((item)=>(
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
            ))}
            </div>
            {cateShow ? categorySearchFilter.length > 5  &&
            <button onClick={handleShow}>Show All</button>
            :
            <button onClick={handleHide}>Hide</button>
            }
            </div>
        :
        allData.map((item)=>(
            <div className='w-full lg:w-[32%] py-5'>
            <Link to={`/product/${item.id}`}>
            <div className="">
            <div className="relative group lg:overflow-hidden">
                <img src={item.thumbnail} className='h-[350px]' alt="sss" />
                <div className="">
                <div className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out lg:bottom-[-120px] w-full lg:group-hover:bottom-[0px] bottom-[-100px] flex items-center justify-end">
                    <ul className='pr-5'>
                        <li className='flex items-center justify-end gap-x-4'>Add to Wish List <FaHeart /></li>
                        <li className='flex items-center justify-end gap-x-4 py-2'>Compare <TfiReload /></li>
                        <li  className='flex items-center justify-end gap-x-4'>Add To Cart<FaHeart /></li>
                    </ul>
                </div>
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