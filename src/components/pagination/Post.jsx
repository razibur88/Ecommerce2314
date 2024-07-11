import React, { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../slice/productSlice';

const Post = ({allData,categorySearchFilter,multiList,filterPrice}) => {
    let [filterShow, setFilterShow] = useState([])
    let [cateShow, setCateShow] = useState(true)
    let dispatch = useDispatch()

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
    let handlePCart = (item) =>{
        dispatch(addToCart({...item, qun: 1}))
    }



  return (
    <>
        {filterPrice.length > 0 ?
        <div className="">
        <div className="flex flex-wrap">
        {filterPrice.map((item)=>(
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
        
        categorySearchFilter.length > 0 ?
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
        <div className={`${multiList == "activeList" ? "" : "flex justify-between flex-wrap" }`}>
        {
            allData.map((item)=>(
                <div className='w-full lg:w-[32%] py-5'>
                <div className="">
                <div className="relative group lg:overflow-hidden">
                <Link to={`/product/${item.id}`}>
                    <img src={item.thumbnail} className='h-[350px]' alt="sss" />
                    </Link>
                    <div className="">
                    <div className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out lg:bottom-[-120px] w-full lg:group-hover:bottom-[0px] bottom-[-100px] flex items-center justify-end">
                        <ul className='pr-5'>
                            <li className='flex items-center justify-end gap-x-4'>Add to Wish List <FaHeart /></li>
                            <li className='flex items-center justify-end gap-x-4 py-2'>Compare <TfiReload /></li>
                            <li onClick={()=>handlePCart(item)} className='flex items-center justify-end gap-x-4'>Add To Cart<FaHeart /></li>
                        </ul>
                    </div>
                    </div>
                </div>
               
                <div className="flex justify-between py-3">
                    <h2 className='text-[#262626] font-sans text-[16px] font-bold'>{item.title}</h2>
                    <p className='text-[#262626] font-sans text-[16px] font-bold'>${item.price}</p>
                </div>
                </div>
              
                </div>
            ))
        }
            </div>
        }

    </>
  )
}

export default Post