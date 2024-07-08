"use client"

import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'

/// !! car is just a property in CarCardProps
interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div>CarCard</div>
  )
}

export default CarCard