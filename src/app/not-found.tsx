"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function  NotFound(){
    const route = useRouter()
    return(
        <div className="flex justify-center items-center py-52">
            <div>
            <p className="text-8xl font-medium text-neutral-200">404 Not Found</p>
            <div  className="flex justify-center items-center mt-16 mb-1">
            <Button className="bg-teal-400 hover:bg-teal-500 rounded-full text-2xl p-6" onClick={()=>route.push("/") }>Quay về Trang chủ</Button>
            </div>
            </div>
        </div>
    )
}