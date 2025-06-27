import { NEXT_PUBLIC_GEOCODING_API } from "@/app/helper/contant";
import axios from "axios";

export const getAddressUser = async (lat: number, lon: number) => {    
  try {
    const res = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${NEXT_PUBLIC_GEOCODING_API}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = res.data;
    const components = data?.results?.[0]?.components;
    const village = components?.suburb || components?.village || components?.hamlet;
    const city = components?.city;

    return {
      village,
      city
    };
  } catch (error) {
    console.log(error);
  }
};
