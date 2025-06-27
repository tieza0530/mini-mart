
import { NEXT_PUBLIC_URL_DB } from '@/app/helper/contant';
import axios from 'axios';
import { ParamValue } from 'next/dist/server/request/params';

export const getFindCategory = async (slug: ParamValue) => {
    try {
        const res = await axios.get(`${NEXT_PUBLIC_URL_DB}/v1/category?slug=${slug}`,{
            headers: {
                "Content-Type" : "application/json"
            }
        })
        if(res.status !== 200) throw new Error("Failed to request data!")
        return res.data
    } catch (error) {
        console.log(error);     
    }
}