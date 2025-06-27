import { NEXT_PUBLIC_URL_DB } from "@/app/helper/contant";
import axios from "axios";


export const getServiceByIDCategory = async (categoryID :string) =>{
    try {
        const res = await axios(`${NEXT_PUBLIC_URL_DB}/v1/service?category-id=${categoryID}`,{
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(res.status !== 200) throw new Error("Failed to request data!")
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}