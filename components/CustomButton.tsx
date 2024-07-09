"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

// reusable component: pass props
const CustomButton = ({ title, containerStyles,
    handleClick, btnType,
    textStyles, rightIcon, isDisable }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            {/* !!!: how to use textStyles */}
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image src={rightIcon} alt="right icon" fill className='object-contain' />
                </div>
            )}
        </button>
    )
}

export default CustomButton