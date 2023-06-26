import Image from 'next/image'
import { FaFacebookF , FaLinkedin, FaGoogle, FaRegEnvelope}from 'react-icons/fa';

  

export default function login() {
  return (
    <div className='h-screen w-screen flex justify-center just items-center bg-white-100:'>
      {/* Left side*/}
      <div className='text-3xl w-1/2 px-5  '>
        <h1 className='text-red-700 ml-8'>INTERSECT</h1>
        <p className='ml-8 mb-2 text-sm'> 
         Intersect India is a global It company focused on innovation and producinf stunnying business outcomes.
That can mean healping clients join upthe dots between storage, computer networking and collabration.
</p>
<a href='#' className='bg-white-500   text-lg font-bold text-black hover:bg-red-600 w-fit
 border-2 border-gray-200 flex justify-center my-2 rounded-full p-3 mx-1'>
  <FaFacebookF className='text-sm'/> </a>

  <a href='#' className='bg-white-500   text-lg font-bold text-black  hover:bg-red-600 w-fit
   border-2 border-gray-200 flex justify-center my-2 rounded-full p-3 mx-1'>
  < FaGoogle className='text-sm'/> </a>

  <a href='#' className='bg-white-500   text-lg font-bold text-black  hover:bg-red-600 w-fit
  border-2 border-gray-200 flex justify-center my-2 rounded-full p-3 mx-1'>
  < FaRegEnvelope className='text-sm'/> </a>

  <a href='#' className='bg-white-500   text-lg font-bold text-black  hover:bg-red-600 w-fit
   border-2 border-gray-200 flex justify-center my-2 rounded-full p-3 mx-1'>
  <FaLinkedin className='text-sm'/> </a>
        </div>
        {/* Right side */}
        <div className='bg-white flex flex-col p-5 rounded-xl w-1/3'>
          <input 
          className='my-2 border border-1 border-gray-100 p-3 rounded md foocus:outline-1 outline-blue-600'
           type='text' placeholder='Email addres or Phone number'/>

          <input 
          className='my-2 border border-1 border-gray-100 p-3 rounded md foocus:outline-1 outline-blue-600'
          type='Password' placeholder='password' /> 
          <button  className=' bg-blue-500 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700'>
            login</button>
            <p className='cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline'>
              Forgotten Password?</p>
          <span>
            <hr/>
          </span>
          <button 
          className='bg-green-500 my-2 py-2 px-2  text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto'>
            Create New Account</button>
        </div>
           
      </div>
  ) 
  }
  

