"use client"
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select"
import { getAddressUser } from "./getAddressUser";
import { useSession } from "next-auth/react";
import { useAuth } from "../AuthProvider";

export const ShowLocation = () => {
  const [ userAddress, setUserAddress ] = useState('');
      const { data: session } = useSession()
      const { dataUser } = useAuth()
  useEffect(() => {
    if( !dataUser?.Address || !session?.user) return
    navigator.geolocation.getCurrentPosition( async (posision) => {
      const { latitude , longitude } = posision.coords;
      const address = await getAddressUser(latitude, longitude);
      console.log(address);
      
    }, 
    (error) => {
          console.error('Lỗi lấy vị trí:', error.message);
    },
    {enableHighAccuracy: true}
  )
    
  }, [dataUser, session])
  return (
    <div>
      <Select value={userAddress} onValueChange={setUserAddress}>
        <SelectTrigger className="rounded-4xl p-5 hover:bg-neutral-100 cursor-pointer transition ">
            <IoLocationOutline className="h-6 w-6 text-neutral-600"/>
            <SelectValue placeholder="Địa chỉ" className="truncate "/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">Hồ chí minh</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
