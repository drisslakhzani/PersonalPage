import React from 'react'
import logo from "../assets/logo_dark.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBook, faEnvelope, faFile, faMoon } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
  return (

    <div className=" bg-white h-fit p-2 rounded-lg py-3 specialFont "> 

       <aside className='flex items-center justify-between '>
        

        <div className='flex p-2 text-gray-700 items-center' >
        <img className='w-[12%] hover:drop-shadow-lg ' src={logo} alt='logo'/>

          {/* adress email */}
          <span className=' text-[16px] hover:text-[17px] p-1 ml-6 h-fit  hover:bg-[#e45447] hover:text-white w-fit rounded-sm hover:shadow-lg hover:drop-shadow-md shadow-slate-900 hover:-rotate-3 duration-150  ' >
            <FontAwesomeIcon className='px-1' icon={faEnvelope}/>
            <a className='text-gray-700 py-2 px-1 hover:text-white' href='mailto:driss.lakhzani.ds@gmail.com'>driss.lakhzani.ds@gmail.com</a>
          </span>

            {/* dark mode */}
          <span className='ml-6 cursor-pointer'><FontAwesomeIcon icon={faMoon}/></span>  
        </div>
        
        <div className='flex p-2 text-gray-500 items-center'>

          <span className='navIcon'>
            <FontAwesomeIcon className='px-1' icon={faFile}/>
            <p className='px-1'>Works</p>
          </span>

          <span className='navIcon'>
            <FontAwesomeIcon className='px-1' icon={faAddressCard}/>
            <p className='px-1'>Resume</p>
          </span>

          <span className='navIcon'>
            <FontAwesomeIcon className='px-1' icon={faBook}/>
            <p className='px-1'>Shelf</p>
          </span>

        </div>

        
       </aside>

    </div>
  )
}

export default NavigationBar