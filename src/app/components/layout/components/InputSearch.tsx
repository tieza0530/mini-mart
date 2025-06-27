"use client"

import { Input } from "@/components/ui/input";
import React from "react";

export const InputSearch = () => {
  return (
    <div className="w-full grid grid-cols-4">
      <Input placeholder="Bạn cần tìm cái gì?" className="h-10 bg-white rounded-4xl col-span-4" />
    </div>
  )
};
