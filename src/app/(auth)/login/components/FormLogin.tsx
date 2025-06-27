"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation"
import { useState } from "react"
import { HandleShowPass } from "../../../helper/showPass"
import axios from "axios"
import { NEXT_PUBLIC_URL_DB } from "@/app/helper/contant"
import { useAuth } from "@/app/components/layout/AuthProvider"
import { ToastContainer, toast } from 'react-toastify';

const FormSchema = z.object({
    username: z.string().trim().toLowerCase().regex(/^([a-z_][a-z0-9_]{2,15}|[^\s@]+@[^\s@]+\.[^\s@]+)$/).max(30),
    password: z.string().trim()
})

export function FormLogin({ setChoiseForgetPass }: { setChoiseForgetPass: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [showPass, setShowPass] = useState(false);
    const { setDataUser, setAccessToken } = useAuth()
    const [isWait, setIsWait] = useState(false)
    const route = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            if (isWait) return
            setIsWait(true)
            const res = await axios.post(`${NEXT_PUBLIC_URL_DB}/v1/auth/login`, {
                username: data.username,
                password: data.password
            }, {
                withCredentials: true,
                validateStatus: () => true
            })
            if (res.status === 200) {
                setDataUser(res.data.data)
                setAccessToken(res.data.accessToken)
                route.push('/')
            } else if (res.status === 404) {
                toast.error("Tài khoản không tồn tại!", { autoClose: 1500 })
            } else if (res.status === 401) {
                toast.error("Sai tài khoản hoặc mật khẩu!", { autoClose: 1500 })
            } else {
                toast.error("Lỗi hệ thống!", { autoClose: 1500 })
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsWait(false)
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-6 p-10 bg-neutral-100 rounded-2xl shadow-2xl border">
                <p className="text-center font-semibold text-3xl">Đăng nhập</p>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tài khoản</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập tài khoản hoặc Email" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mật khẩu</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input type={showPass ? "text" : "password"} placeholder="Nhập mật khẩu" {...field} />
                                    <div className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2">
                                        <HandleShowPass showPass={showPass} setShowPass={setShowPass} />
                                    </div>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full text-lg mb-0 mt-2 py-6 bg-teal-400 hover:bg-teal-500 ">Đăng nhập</Button>
                <p className="text-end text-xs my-2 font-normal hover:text-blue-500 cursor-pointer hover:underline" onClick={() => setChoiseForgetPass(true)}>Quên mật khẩu ?</p>
                <div className="flex items-center w-full pl-10 bg-white py-2 rounded-sm cursor-pointer mb-2" onClick={() => signIn("google")}>
                    <FcGoogle className="mr-2 text-2xl" />
                    <span>Đăng nhập bằng Google</span>
                </div>
                <div className="flex items-center w-full pl-10 bg-white py-2 rounded-sm cursor-pointer" onClick={() => signIn("facebook")}>
                    <FaFacebook className="mr-2 text-2xl text-[#4A64FB]" />
                    <span>Đăng nhập bằng Facebook</span>
                </div>
                <p className="text-center text-xs mb-0 font-normal hover:text-blue-500 cursor-pointer hover:underline" onClick={() => route.push('/register')}>Đăng ký tài khoản ?</p>
            </form>
            <ToastContainer />
        </Form>
    )
}
