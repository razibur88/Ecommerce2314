import React, { useContext, useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Container from '../components/Container';
import { apiData } from '../components/ContextApi';
import Flex from '../components/Flex';
import PaginationArea from '../components/pagination/PaginationArea';
import Post from '../components/pagination/Post';

const Product = () => {
    let data = useContext(apiData)
    let [currentPage, setCurrentpage] = useState(1)
    let [perPage, setPerPage] = useState(6)
    let [catshow, setCatShow] = useState(false)
    let [category,setCategory] = useState([])
    let [categorySearchFilter,setCategorySearchFilter] = useState([])

    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage

    let allData = data.slice(firstPage, lastPage)

    let pageNumber = []

    for(let i= 0; i < Math.ceil(categorySearchFilter.length > 0 ? categorySearchFilter : data.length / perPage); i++){
        pageNumber.push(i)
    }

    let paginate = (pageNumber) =>{
        setCurrentpage(pageNumber + 1);
    }

    let next = () =>{
        if(currentPage < pageNumber.length){
            setCurrentpage((state) => state + 1)
        }
    }

    let prev = () =>{
        if(currentPage > 1){
            setCurrentpage((state) => state -1)
        }
    }
    useEffect(()=>{
        setCategory([...new Set(data.map((item)=>item.category)) ])
    },[data])

    let handleSubcate = (citem) =>{
        let categoryFilter = data.filter((item)=> item.category ==  citem)
        setCategorySearchFilter(categoryFilter)
    }
    return (
        <section>
            <Container>
                <Flex>
                    <div className="w-[20%]">
                    <div className="mt-16">
                <h3 onClick={() => setCatShow(!catshow)} className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Category <p>{catshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
                {catshow &&
                  <ul>
                    {category.map((item)=>(

                    <li onClick={()=>handleSubcate(item)} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] capitalize'>{item}</li>
                    ))}
                  </ul>
                }
              </div>
                    </div>
                    <div className="w-[80%]">
                        <div className="flex justify-between flex-wrap">
                            <Post allData={allData} categorySearchFilter={categorySearchFilter}/>
                        
                        </div>
                        <div className="text-end">
                            <PaginationArea pageNumber={pageNumber} paginate={paginate} currentPage={currentPage} next={next} prev={prev}/>
                        </div>
                        
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Product