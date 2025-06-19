"use client"
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select"

export const ShowLocation = () => {
  const [ userAddress, setUserAddress ] = useState('');
  
  return (
    <div className="ml-2 flex items-center">
      <Select value={userAddress} onValueChange={setUserAddress}>
        <SelectTrigger className="rounded-4xl p-5 ">
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
