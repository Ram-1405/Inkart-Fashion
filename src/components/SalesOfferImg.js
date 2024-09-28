import React from 'react'
import sampleImage from '../images/Home/salesoff.jpg';
export default function SalesOfferImg() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-56 sm:h-64 md:h-72 lg:h-96 xl:h-[500px] mt-4">
        <div className="p-3 w-full h-full">
          <img 
            src={sampleImage} 
            alt="Fashion Banner" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
