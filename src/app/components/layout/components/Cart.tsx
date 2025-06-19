import React from "react";
import { BsCart3 } from "react-icons/bs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { GrDropbox } from "react-icons/gr";

export const Cart = () => {
  return (
    <div>
      <HoverCard >
        <HoverCardTrigger>
          <BsCart3
            className="h-6 w-6 mr-4 text-neutral-600 "
            title="giỏ hàng" />
        </HoverCardTrigger>
        <HoverCardContent className="min-h-96 min-w-80 flex justify-between items-center " align="end"   >
          <div className="flex flex-col justify-between items-center text-neutral-200">
            <GrDropbox className="h-14 w-14"/>
            <p>Chưa có sản phẩm nào trong giỏ hàng</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};



