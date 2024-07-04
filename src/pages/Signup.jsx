import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../components/Container';



const Signup = () => {
    const auth = getAuth();
    const db = getDatabase();
    let navigate = useNavigate()
    let [firstName, setFirstName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [pshow, setPshow] = useState(false)

    let handleFirstName = (e) =>{
        setFirstName(e.target.value)
    }

    let handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    let handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    // let handleSubmit = () =>{
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((user) => {
    //             updateProfile(auth.currentUser, {
    //                 displayName: firstName,
    //               })
    //                 .then(() => {
    //                   toast("Registration Successfully Done. Go Login page");
    //                   setTimeout(() => {
    //                     navigate("/login");
    //                   }, 2000);
    //                 })
    //                 .then(() => {
    //                   set(ref(db, "users/" + user.user.uid), {
    //                     username: fullName,
    //                     email: email,
    //                   });
    //                 })
    //                 .catch((error) => {
    //                   // An error occurred
    //                   // ...
    //                 });
                
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorCode);
    //             console.log(errorMessage);
    //         });
    // }

   
  return (
    <>
    <section className='px-5 lg:px-0'>
        <Container>
        <div className=" pt-[5px]">
                    <div className="">
                        <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>Sign up</h3>
                        <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> <Link to="/">Home</Link> <IoIosArrowForward /> <Link to="/signup">Sign up</Link> </p>
                    </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div className="lg:w-[45%] w-full mt-[50px]">
            <p className='font-dmsans text-[18px] font-normal text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>

        <div className="mt-[50px] py-[50px] border-y-[1px]  border-[#F0F0F0]">
        <form action="">
            <h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>Your Personal Details</h3>
            <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>First Name</h3>
                    <input onChange={handleFirstName} type="text" required placeholder='First Name' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Last Name</h3>
                    <input type="text" required placeholder='Last Name' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Email address</h3>
                    <input onChange={handleEmail} type="email" required placeholder='company@domain.com' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Telephone</h3>
                    <input type="tel" placeholder='Your phone number' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
            </div>
        </form>
        </div>


        <div className="mt-[50px] pb-[50px] border-b-[1px]  border-[#F0F0F0]">
        <form action="">
            <h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>New Customer</h3>
            <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Address 1</h3>
                    <input type="text" required placeholder='4279 Zboncak Port Suite 6212' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Address 2</h3>
                    <input type="text" required placeholder='---' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>City</h3>
                    <input type="text" required placeholder='Your city' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Post Code</h3>
                    <input type="text" placeholder='05228' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Division</h3>
                    <input type="text" placeholder='Please select' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>District</h3>
                    <input type="text" placeholder='Please select' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
            </div>
        </form>
        </div>

        <div className="mt-[50px] pb-[50px] border-b-[1px]  border-[#F0F0F0]">
        <form action="">
            <h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>Your Password</h3>
            <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5 relative">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]'>Password</h3>
                    <input onChange={handlePassword} type={pshow ? "text" : "password"} required placeholder='Password' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    <div onClick={()=>setPshow(!pshow)} className="absolute top-[50%] translate-y-[-50%] right-0">
                        {pshow == true ? <FaEyeSlash/> :  <FaEye/>}
                       
                    </div>
                </div>
                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                    <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Repeat Password</h3>
                    <input type="Repeat Password" required placeholder='Password' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]'/>
                    
                </div>
            </div>
        </form>
        </div>

        <div className="">
            <div className=" flex mt-[40px]">
                <input type="checkbox" /> <p className='font-dmsans text-[14px] font-normal text-[#767676] ms-3'>I have read and agree to the Privacy Policy</p>
            </div>

            <div className=" flex items-center mt-5">
                <h3 className='font-dmsans text-[14px] font-normal text-[#767676]'>Subscribe Newsletter</h3>
                <input type="radio" name='yes' className='ms-6'/>
                <h3 className='font-dmsans text-[14px] font-normal text-[#767676] ms-2'>Yes</h3>
                <input type="radio" name='yes' className='ms-4'/>
                <h3 className='font-dmsans text-[14px] font-normal text-[#767676] ms-2'>No</h3>
            </div>

            <div className="mt-5">
                <button onClick={handleSubmit} className='font-dmsans text-[14px] font-bold text-white py-[16px] px-[77px] bg-[#262626]'>Sign up</button>
            </div>
        </div>

        </Container>
    </section>
    </>
  )
}

export default Signup