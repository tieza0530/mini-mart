"use client"
import { Button } from "@/components/ui/button";
import { InputSearch } from "./components/InputSearch";
import { useRouter } from "next/navigation";
import { ShowLocation } from "./components/ShowLocation";
import { Logo } from "./components/Logo";

export default function Header() {
    const route = useRouter()
    return (
        <div className="py-6 grid grid-cols-4 cursor-pointer border-b">
            <div className="flex flex-col" onClick={() => route.push('/')}>
                <Logo />
            </div>
            <div className="col-span-2 flex items-center">
            <InputSearch />
            </div>
            <div className="flex items-center justify-between">
                <ShowLocation />
                <div  className="flex items-center justify-end">
                <Button className="bg-teal-400 hover:bg-teal-500 rounded-4xl h-10" onClick={() =>route.push('/login')}>Đăng nhập</Button>
                </div>
            </div>
        </div>
    );
}
