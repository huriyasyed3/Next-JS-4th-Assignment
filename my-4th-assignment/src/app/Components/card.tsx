import React from 'react'
interface Tprops {
  name: string,
  age: number,
  rollno: number,
  class: string,
}

const Card = (props: Tprops) => {
  return (
    <>
      {/* Responsive classes added */}
      <div className='bg-white text-orange-500 border border-orange-400 p-4 rounded-lg shadow-md w-full
        sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2'>
        <h1 className='font-bold text-black'>Name: {props.name}</h1>
        <p className='text-black'>Roll No: {props.rollno}</p>
        <p className='text-black'>Class: {props.class}</p>
        <p className='text-black'>Age: {props.age}</p>
        <h1 className='justify-end items-end flex pt-2'>Authorized Signature</h1>
      </div>
    </>
  )
}
export default Card;

 