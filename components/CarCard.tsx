"use client"

import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent } from '@/utils'
import CarDetails from './CarDetails'

/// !! car is just a property in CarCardProps
interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          $
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
          /day
        </span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src="/hero.png" alt="car image"
          fill priority
          className='object-contain'
        />
      </div>

      <div className='relative flex w-full mt-2'>
        {/*when hover:invisible */}
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' alt='steering wheel' width={20} height={20} />
            <p className='text-[14px]'>
              {transmission === 'a' ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' alt='tire' width={20} height={20} />
            <p className='text-[14px]'>
              {drive.toUpperCase()}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' alt='gas' width={20} height={20} />
            <p className='text-[14px]'>
              {city_mpg}
            </p>
          </div>
        </div>
        {/* button */}
        <div className='car-card__btn-container'>
          <CustomButton
            title="View More"
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  )
}

export default CarCard