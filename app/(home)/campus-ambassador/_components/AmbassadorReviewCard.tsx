import React from 'react'
import Image from 'next/image'
import { CgProfile } from 'react-icons/cg'
function AmbassadorReviewCard({name , imageURL ,  position, review} : {name: string, imageURL: string ,position: string , review: string}) {
  return (
    <div className="flex bg-gray-100 hover:shadow-lg hover:scale-105 ease-in-out transition-all duration-300 gap-x-5 hover:cursor-pointer dark:bg-gray-700 shadow-md rounded-lg p-4 md:p-8 mb-4">
          <div className="w-1/6 flex justify-center dark:text-white pt-4 text-5xl">
            <Image src={imageURL} width={70}  alt='' className='rounded-full max-h-[70px] min-h-[70px] min-w-[70px] max-w-[70px]'/>
          </div>
          <div className="w-5/6">
            <h2 className="text-xl font-semibold">{name}</h2>
            <h6>{position}</h6>
            <p className="mt-2">
             {review}
            </p>
          </div>
        </div>
  )
}

export default AmbassadorReviewCard