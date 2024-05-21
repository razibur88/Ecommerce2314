import React, { useContext, useState } from 'react';
import Container from '../components/Container';
import { apiData } from '../components/ContextApi';
import Flex from '../components/Flex';
import PaginationArea from '../components/pagination/PaginationArea';
import Post from '../components/pagination/Post';

const Product = () => {
    let data = useContext(apiData)

    let [currentPage, setCurrentpage] = useState(1)
    let [perPage, setPerPage] = useState(6)

    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage

    let allData = data.slice(firstPage, lastPage)

    let pageNumber = []

    for(let i= 0; i < Math.ceil(data.length / perPage); i++){
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

    return (
        <section>
            <Container>
                <Flex>
                    <div className="w-[20%]">
                        cateGory
                    </div>
                    <div className="w-[80%]">
                        <div className="flex justify-between flex-wrap">
                            <Post allData={allData}/>
                        
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