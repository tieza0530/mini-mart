"use client"
import { Button } from "@/components/ui/button";
import { InputSearch } from "./components/InputSearch";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "./components/Logo";
import { signOut, useSession } from "next-auth/react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image";
import { useAuth } from "./AuthProvider";
import { PiUserCircleThin } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { ShowLocation } from "./components/ShowLocation";
import axios from "axios";
import { NEXT_PUBLIC_URL_DB } from "@/app/helper/contant";

export default function Header() {
    const { data: session } = useSession()    
    const { dataUser, accessToken } = useAuth()
    
    const searchUrl = usePathname()
    const route = useRouter()
    const handleLogin = async() => {
        const res = await axios.post(`${NEXT_PUBLIC_URL_DB}/v1/auth/logout`, {
            accessToken,
        }, {
            withCredentials: true
        })
        if(res.status === 200){
           window.location.reload()
        }
    }
    return (
        <div className="py-4 grid grid-cols-4 cursor-pointer border-b">
            <div onClick={() => route.push('/')}>
                <Logo />
            </div>
            <div className="col-span-2 grid grid-cols-1 items-center">
                <div className="my-2 grid grid-cols-4 gap-2 text-center ">
                    <Button className={cn(searchUrl === '' ? "bg-neutral-200" : "", "text-black font-semibold rounded-4xl border bg-white hover:bg-neutral-200/60")} onClick={() => route.push('/')}>Trang chủ</Button>
                    <Button className={cn(searchUrl === '/conversation' ? "bg-neutral-200" : "", "text-black font-semibold  border rounded-4xl bg-white hover:bg-neutral-200/60")}>Trò chuyện</Button>
                    <Button className={cn(searchUrl === '/blog' ? "bg-neutral-200" : "", "text-black font-semibold rounded-4xl border bg-white hover:bg-neutral-200/60")}>Đăng dịch vụ</Button>
                    <Button className={cn(searchUrl === '/about' ? "bg-neutral-200" : "", "text-black font-semibold rounded-4xl border bg-white hover:bg-neutral-200/60")} >Về chúng tôi</Button>
                </div>
                <InputSearch />
            </div>
            <div className="grid grid-cols-1 items-center">
                <div className="flex justify-end">
                    {(!session?.user && !dataUser) && <div className="flex items-start " onClick={() => route.push('/login')}><span className="flex items-center border-1 pr-4 pl-1 rounded-full bg-teal-400 text-white border-teal-400 shadow-md hover:bg-teal-500 h-10" ><PiUserCircleThin className="text-4xl text-white" />Đăng nhập</span></div>}
                    {session?.user &&
                        <Popover>
                            <PopoverTrigger className="flex justify-start  h-10">
                                <div className="flex items-center border-1 pr-4 pl-1 rounded-4xl py-1 bg-teal-400 text-white border-teal-400">
                                    {session.user.image ? <Image src={`${session.user.image}`} alt="avatar-user" width={32} height={32} className="rounded-4xl mr-1" /> : <PiUserCircleThin className="text-4xl text-neutral-400" />}
                                    <span>{session.user.name}</span>
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto" align="end">
                                <div className="space-y-1 cursor-pointer ">
                                    <p className="hover:bg-neutral-200/60  p-2 rounded-sm">Thông tin cá nhân</p>
                                    <p className="hover:bg-neutral-200/60 p-2 rounded-sm" onClick={() => signOut()}>Đăng xuất</p>
                                </div>
                            </PopoverContent>
                        </Popover>

                    }
                    {dataUser &&
                        <Popover>
                            <PopoverTrigger className="flex justify-start h-10">
                                <div className="flex items-center border-1 pr-4 pl-1 bg-teal-400 border-teal-400 text-white rounded-4xl py-1 shadow-sm">
                                    {dataUser?.AvatarURL ? <Image src={`${dataUser.AvatarURL}`} alt="avatar-user" width={24} height={24} className="rounded-4xl mr-2" />
                                        : <PiUserCircleThin className="text-4xl text-white" />}
                                    <span>{dataUser.Name || dataUser.Account}</span>
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto" align="end">
                                <div className="space-y-1 cursor-pointer ">
                                    <p className="hover:bg-neutral-200/60  p-2 rounded-sm">Thông tin cá nhân</p>
                                    <p className="hover:bg-neutral-200/60 p-2 rounded-sm" onClick={handleLogin}>Đăng xuất</p>
                                </div>
                            </PopoverContent>
                        </Popover>
                    }
                </div>
                <div className="w-auto flex justify-end mt-2 h-10">
                    <ShowLocation/>
                </div>
            </div>
        </div>
    );
}
