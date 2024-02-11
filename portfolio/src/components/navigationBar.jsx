import React from 'react'
import logo from "../assets/logo_dark.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
  return (

    <div className=" bg-white h-fit p-2 rounded-lg py-3"> 

       <aside className='flex items-center '>
        <img className='w-[9%]' src={logo} alt='logo'/>

        <div className='text-black text-sm p-1 h-fit hover:bg-[#e45447] hover:text-white w-fit rounded-sm hover:shadow-lg hover:drop-shadow-md shadow-slate-900 hover:-rotate-3 duration-150  '>
          <FontAwesomeIcon icon={faEnvelope}/>
          <a className='text-black py-2 px-1 hover:text-white' href='mailto:driss.lakhzani.ds@gmail.com'>driss.lakhzani.ds@gmail.com</a>
        </div>
       </aside>

    </div>
  )
}

export default NavigationBar