"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast, Toaster } from "sonner"
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
import { useRouter } from "next/navigation"
import { HandleShowPass } from "../../../helper/showPass"
import { useState } from "react"

const FormSchema = z.object({
    username: z.string().min(2).regex(/^[a-zA-Z0-9_]+$/),
    email: z.string().trim().email(),
    password: z.string().min(6).regex(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/),
    passwordAgain: z.string().min(6).regex(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/),
})
    .refine((data) => data.password === data.passwordAgain, {
        path: ["passwordAgain"],
    });

export function FormRegister() {
    const [showPass, setShowPass] = useState(false);
    const [showPassAgain, setShowPassAgain] = useState(false);

    const route = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
        toast("You submitted the following values")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-6 p-10 bg-neutral-100 rounded-2xl shadow-2xl border">
                <p className="text-center font-semibold text-3xl">Đăng ký</p>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tài khoản</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập tài khoản" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập Email" {...field} />
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
                <FormField
                    control={form.control}
                    name="passwordAgain"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nhập lại mật khẩu</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input type={showPassAgain ? "text" : "password"} placeholder="Nhập lại mật khẩu" {...field} />
                                    <div className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2">
                                        <HandleShowPass showPass={showPassAgain} setShowPass={setShowPassAgain} />
                                    </div>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full text-lg mt-2 py-6 bg-teal-400 hover:bg-teal-500 ">Đăng ký</Button>
                <p className="text-center text-xs mb-0 font-normal hover:text-blue-500 cursor-pointer hover:underline" onClick={() => route.push('/login')}>Quay lại Đăng nhập !</p>
            </form>
            <Toaster />
        </Form>
    )
}
