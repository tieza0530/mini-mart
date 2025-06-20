
import axios from 'axios';
import { NEXT_PUBLIC_URL_DB } from '../../../helper/contant';

export const getCategory = async () => {
    try {
        const res = await axios.get(`${NEXT_PUBLIC_URL_DB}/v1/category`,{
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