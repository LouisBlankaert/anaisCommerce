import React from 'react'

export default function Reservation() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className=''>
            <h1 className='text-xl font-bold'>Besoin de faire vos sourcils ou ongles ?</h1>
        </div>
        <button className='bg-brun p-2 flex items-center justify-center rounded-full text-white mt-4 hover:bg-yellow-950 hover:animate-none animate-bounce transform duration-500'>
          Reserver maintenant
        </button>
    </div>
  )
}
