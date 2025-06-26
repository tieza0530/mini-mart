import axios from "axios";
import { NEXT_PUBLIC_URL_DB } from "../helper/contant";


export const getAccessToken = async() => {
    try {
        const res = await axios.get(`${NEXT_PUBLIC_URL_DB}/v1/auth/refresh-token`,{
            withCredentials: true,
            headers: {
                "Content-Type" : "application"
            }
        })
        return res.data
        
        
    } catch (error) {
        console.log(error);
        
    }
}