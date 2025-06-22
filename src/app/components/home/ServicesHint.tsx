"use client"
import React from 'react';
import Image from 'next/image';
import { TiStarFullOutline } from "react-icons/ti";
import { Button } from '@/components/ui/button';

export const ServicesHint = () => {
    return (
        <div className='grid grid-cols-3 gap-4 my-10'>
            {listData.map((value, idx) => (
                <div key={idx} className='bg-[var(--color-card)] p-6 rounded-3xl shadow border cursor-pointer'>
                    <Image  src={value.avatar} alt='sada' width={300} height={180} className='w-full  h-[200px]  object-cover hover:scale-[1.05]' />
                    <div className='mt-4'>
                        <b>Tên dịch vụ: <span className='text-2xl'>{value.name}</span></b>
                        <p><strong>Địa chỉ: </strong><span>{value.address}</span></p>
                        <div className='flex items-center text-yellow-400'>
                            <strong className='mr-2 text-black'>Xếp hạng: </strong>
                            {[...Array( Math.floor(value.rating))].map((_, idx) => <TiStarFullOutline key={idx}/> )}
                         </div>
                        <div>
                            <strong className='mr-2'>Giờ hoạt động:</strong>
                            <span>{value.openHours}</span>
                        </div>
                        <div>
                            <strong className='mr-2'>Loại dịch vụ:</strong>
                            <span>{value.category}</span></div>
                    </div>
                    <div className='w-full mt-4 flex justify-end'>
                        <Button className='bg-teal-400 hover:bg-teal-500 px-6'>Đặt lịch</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

 
const listData = [
  {
    avatar: '/suaxe.png', 
    name: "Sửa xe Minh",
    category: "Sửa chữa",
    address: "123 Lý Thường Kiệt, Quận 10, TP.HCM",
    rating: 5,
    openHours: "08:00 - 20:00",
    phone: "0909123456",
  },
  {
    avatar: '/spa.jpg', 
    name: "Spa Như Ý",
    category: "Làm đẹp",
    address: "45 Trần Hưng Đạo, Quận 1, TP.HCM",
    rating: 4,
    openHours: "09:00 - 21:00",
    phone: "0909876543",
  },
  {
    avatar: '/dichvu.png', 
    name: "Giao hàng Nhanh 24h",
    category: "Vận chuyển",
    address: "67 Nguyễn Văn Cừ, Quận 5, TP.HCM",
    rating: 4,
    openHours: "24/7",
    phone: "0909001122",
  },
    {
    avatar: '/dichvu.png', 
    name: "Giao hàng Nhanh 24h",
    category: "Vận chuyển",
    address: "67 Nguyễn Văn Cừ, Quận 5, TP.HCM",
    rating: 4,
    openHours: "24/7",
    phone: "0909001122",
  },
    {
    avatar: '/dichvu.png', 
    name: "Giao hàng Nhanh 24h",
    category: "Vận chuyển",
    address: "67 Nguyễn Văn Cừ, Quận 5, TP.HCM",
    rating: 4,
    openHours: "24/7",
    phone: "0909001122",
  },
    {
    avatar: '/dichvu.png', 
    name: "Giao hàng Nhanh 24h",
    category: "Vận chuyển",
    address: "67 Nguyễn Văn Cừ, Quận 5, TP.HCM",
    rating: 4,
    openHours: "24/7",
    phone: "0909001122",
  },
];
