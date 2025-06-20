"use client"
import React from "react";

export const IframeMaps = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.707148272065!2d105.88625087472015!3d21.243458380370914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135050058bd769f%3A0x8ab63db294dc968!2zVOG6oXAgSG_DoSBUaHXDvSBUdXnhu4Nu!5e0!3m2!1sen!2s!4v1750308142557!5m2!1sen!2s"
        loading="lazy"
        width={"100%"}  
        height={"100%"}
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};
