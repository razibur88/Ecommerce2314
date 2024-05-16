import React, { useContext } from 'react'
import Container from './Container'
import ArrivalsItem from './ArrivalsItem'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { GoChevronRight,GoChevronLeft  } from "react-icons/go";
import { Link } from 'react-router-dom';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className='h-[50px] w-[50px] bg-[#979797] rounded-full text-center leading-[50px] text-[24px] text-white absolute top-[50%] right-0 lg:right-[-11px] z-50 translate-y-[-50%]'><GoChevronRight className='inline-block' /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className='h-[50px] w-[50px] bg-[#979797] rounded-full text-center leading-[50px] text-[24px] text-white absolute top-[50%] left-0 lg:left-[-25px] z-50 translate-y-[-50%]'><GoChevronLeft className='inline-block' /></div>
    );
  }


const Newarrivals = () => {
    let data = useContext(apiData)
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
         
        ]
      };    

  return (
   <section>
    <Container>
        <h2 className='text-[#262626] font-sans text-[36px] font-bold'>New Arrivals</h2>
     
            <Slider {...settings}>
            {data.map((item)=>(
               <Link to="/product">
                 <ArrivalsItem item={item}/>
               </Link>
            ))}
            </Slider>
    </Container>
   </section>
  )
}

export default Newarrivals