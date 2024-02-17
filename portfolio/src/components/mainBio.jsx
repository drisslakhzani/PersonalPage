import { faGithub, faLinkedin, faTwitter } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from "../assets/photo_main.png"
import "../App.css"
import React from 'react'

const MainBio = () => {
  return (
    <div className=' h-fit flex '>

        {/* social links */}
        <div className='flex flex-col w-fit px-8  items-center justify-center text-slate-600 text-2xl '> 
            <FontAwesomeIcon className='sideIcons' icon={faTwitter}/>
            <FontAwesomeIcon className='sideIcons ' icon={faGithub}/>
            <FontAwesomeIcon className='sideIcons' icon={faLinkedin}/>
        </div> 

        {/* main text presentation */}
        <div className='ml-10  flex items-center justify-between md:max-w-lg'>

            <aside>
                <h1 className='specialFont font-bold text-2xl'>Hi I'am,</h1>
                <h1 className='typeWriter specialFont font-bold text-4xl'>DRISS LAKHZANI.</h1>
                <p className='mt-[7%] text-sm font-bold leading-7 '>
                Driven Full-Stack Developer:<br/> Passionate about Problem-Solving, Continuous Learning, and Innovative Adaptation to Emerging Technologies
                </p>
            </aside>
            <img className='w-1/2 h-fit ml-32 mr-auto' src={image} alt='mainBioImage'/>
            

        </div>

    </div>
  )
}

export default MainBio