"use client"

import React from 'react'
import Image from 'next/image';
import { CategoryProps } from '@/app/components/home/components/type.category';

export const ListCategory = ({listCategories} : {listCategories: CategoryProps[]}) => {
    
    return (
    <div className='grid grid-cols-6 gap-2'>
        {listCategories.map((value, idx) => (
            <div  key={idx} className='py-4 px-1 text-sm bg-neutral-50 border flex flex-col items-center justify-center rounded-3xl hover:scale-[1.05] cursor-pointer ' title={value.Category}>
            <Image src={value?.Icon} alt={value.Slug} width={60} height={60} /> 
            <p className='font-bold'>{value.Category}</p>
            </div>
        ))}
    </div>
  )
}


