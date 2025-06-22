"use client"

import React from 'react';
import Image from 'next/image';

export const CarouselHome = () => {
    return (
        <div className='relative w-full h-96 my-10 '>
            <Image src={'/VietFind.png'} alt='carousel-home' fill className='object-contain rounded-3xl' />
        </div>
    );
};

