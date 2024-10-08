import React, { useContext, useEffect, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { GrSort } from "react-icons/gr";
import { PiSquaresFourFill } from "react-icons/pi";
import Container from "../components/Container";
import { apiData } from "../components/ContextApi";
import PaginationArea from "../components/pagination/PaginationArea";
import Post from "../components/pagination/Post";

const Product = () => {
  let data = useContext(apiData);
  let [currentPage, setCurrentpage] = useState(1);
  let [perPage, setPerPage] = useState(9);
  let [catshow, setCatShow] = useState(false);
  let [category, setCategory] = useState([]);
  let [categorySearchFilter, setCategorySearchFilter] = useState([]);
  let [multiList, setMultiList] = useState("");
  let [lowprice, setLowprice] = useState("");
  let [highprice, setHighprice] = useState("");
  let [filterPrice, setFilterPrice] = useState([]);
  let [mobileview, setMobileview] = useState(true);

  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;

  let allData = data.slice(firstPage, lastPage);

  let pageNumber = [];

  for (
    let i = 0;
    i <
    Math.ceil(
      categorySearchFilter.length > 0
        ? categorySearchFilter
        : data.length / perPage
    );
    i++
  ) {
    pageNumber.push(i);
  }

  let paginate = (pageNumber) => {
    setCurrentpage(pageNumber + 1);
  };

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentpage((state) => state + 1);
    }
  };

  let prev = () => {
    if (currentPage > 1) {
      setCurrentpage((state) => state - 1);
    }
  };
  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  let handleSubcate = (citem) => {
    let categoryFilter = data.filter((item) => item.category == citem);
    setCategorySearchFilter(categoryFilter);
  };

  let handleList = () => {
    setMultiList("activeList");
  };
  let handlePrice = (value) => {
    setLowprice(value.low);
    setHighprice(value.high);
    let priceFilter = data.filter(
      (item) => item.price > value.low && item.price < value.high
    );
    setFilterPrice(priceFilter);
  };

  let handleShowData = (e) => {
    setPerPage(e.target.value);
  };

  useEffect(() => {
    function navbarMenu() {
      if (window.innerWidth < 1024) {
        setMobileview(false);
      } else {
        setMobileview(true);
      }
    }
    navbarMenu();
    window.addEventListener("resize", navbarMenu);
  }, []);

  return (
    <section>
      <Container>
        <div className="lg:flex">
          <div className="lg:w-[20%] w-full ">
            <div className="mt-16 pl-5">
              <h3
                onClick={() => setCatShow(!catshow)}
                className="font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer"
              >
                Shop by Category{" "}
                <p>{catshow == true ? <FaCaretUp /> : <FaCaretDown />}</p>
              </h3>
              {catshow && (
                <ul>
                  {category.map((item) => (
                    <li
                      onClick={() => handleSubcate(item)}
                      className="font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] capitalize"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-16 pl-5">
              <h3 className="font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer">
                Shop by Price
              </h3>

              <ul>
                <li
                  onClick={() => handlePrice({ low: 0, high: 10 })}
                  className="font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] capitalize"
                >
                  Price $0- $10
                </li>
                <li
                  onClick={() => handlePrice({ low: 10, high: 20 })}
                  className="font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] capitalize"
                >
                  Price $10- $20
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-[80%] w-full">
            <div className="lg:flex justify-between pt-[10px] mt-[50px] pl-10">
              <div className="flex gap-x-5 lg:justify-normal justify-center lg:w-[30%] w-100%">
                <div
                  onClick={() => setMultiList("")}
                  className={`lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center ${
                    multiList == "activeList"
                      ? "bg-white text-white"
                      : "bg-black text-white"
                  } border-[1px] border-[#737373] text-[20px]`}
                >
                  <PiSquaresFourFill />
                </div>
                <div
                  onClick={handleList}
                  className="lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center text-[#737373] hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#737373] text-[20px]"
                >
                  <GrSort />
                </div>
              </div>
              <div className="flex lg:justify-end justify-between lg:gap-x-10 lg:w-[70%] w-[100%] pt-[20px] lg:pt-0">
                <div className="">
                  <label
                    htmlFor=""
                    className="text-[16px] font-sans text-[#767676] font-normal"
                  >
                    Sort by :{" "}
                  </label>
                  <select
                    name=""
                    id=""
                    className="border-[1px] border-[#767676] rounded-sm text-start lg:px-[60px] px-[10px] py-[5px] text-[16px] font-sans text-[#767676] font-normal"
                  >
                    <option value="">Featured</option>
                    <option value="">Price</option>
                    <option value="">Category</option>
                  </select>
                </div>
                <div className="">
                  <label
                    htmlFor=""
                    className="text-[16px] font-sans text-[#767676] font-normal"
                  >
                    Show :{" "}
                  </label>
                  <select
                    onChange={handleShowData}
                    name=""
                    id=""
                    className="border-[1px] border-[#767676] rounded-sm text-start lg:px-[60px] px-[25px] py-[5px] text-[16px] font-sans text-[#767676] font-normal"
                  >
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                  </select>
                </div>
              </div>
            </div>

            <Post
              filterPrice={filterPrice}
              allData={allData}
              categorySearchFilter={categorySearchFilter}
              multiList={multiList}
            />

            <div className="text-end">
              <PaginationArea
                pageNumber={pageNumber}
                paginate={paginate}
                currentPage={currentPage}
                next={next}
                prev={prev}
                mobileview={mobileview}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Product;
