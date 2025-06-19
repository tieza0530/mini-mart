"use client"
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BsTelephone } from "react-icons/bs";

export const ShowLocation = () => {
  return (
    <div className="ml-6 flex items-center">
      <HoverCard>
        <HoverCardTrigger><IoLocationOutline className="h-6 w-6 text-neutral-600" /></HoverCardTrigger>
        <HoverCardContent className="w-auto text-sm cursor-pointer" title="Xem trên map" onClick={() => window.open('https://maps.app.goo.gl/7GyuLTEf4abvK5yV7', "_blank")}>
          Chợ thá - Yên Sào - Xuân Giang - Sóc Sơn - Hà Nội
        </HoverCardContent>
      </HoverCard>
        <HoverCard>
        <HoverCardTrigger><BsTelephone className="h-5 w-5 text-neutral-600 ml-2"/></HoverCardTrigger>
        <HoverCardContent className="w-auto text-sm cursor-pointer" title="Số điện thoại">
         0379636362
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
