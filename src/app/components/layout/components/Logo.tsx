import React from "react";
import Image from "next/image";
export const Logo = () => {
  return (
    <div >
      <div className="flex items-center">
        <Image src={'/logo_vietFind.png'} alt="logo" width={60} height={60} />
        <p className="text-3xl font-semibold text-orange-400 ml-2">VietFind</p>
      </div>
      <p className="text-xs text-gray-400">Tìm nhanh – Gặp đúng – Gần bạn!</p>
    </div>
  );
};
