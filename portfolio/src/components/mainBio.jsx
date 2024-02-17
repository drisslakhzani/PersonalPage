import { faGithub, faLinkedin, faTwitter } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../App.css"
import React from 'react'

const MainBio = () => {
  return (
    <div className='w-fit flex '>

        {/* social links */}
        <div className='flex flex-col w-fit px-3 items-center justify-center text-slate-600 text-2xl '> 
            <FontAwesomeIcon className='py-3 cursor-pointer' icon={faTwitter}/>
            <FontAwesomeIcon className='py-3 cursor-pointer' icon={faGithub}/>
            <FontAwesomeIcon className='py-3 cursor-pointer' icon={faLinkedin}/>
        </div> 

        {/* main text presentation */}
        <div className='ml-10'>

            <aside>
                <h1 className='typeWriter specialFont font-bold'>DRISS LAKHZANI.</h1>

            </aside>

        </div>

    </div>
  )
}

export default MainBio