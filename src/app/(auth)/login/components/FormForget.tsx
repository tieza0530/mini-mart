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

const FormSchema = z.object({
   username: z.string().trim().toLowerCase().regex(/^([a-z_][a-z0-9_]{2,15}|[^\s@]+@[^\s@]+\.[^\s@]+)$/)
})

export function FormForget({setChoiseForgetPass}: {setChoiseForgetPass: React.Dispatch<React.SetStateAction<boolean>>}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast("You submitted the following values", {duration: 1000})
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-6 p-10 bg-neutral-100 rounded-2xl shadow-2xl border">
        <p className="text-center font-semibold text-3xl">Quên mật khẩu</p>
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
        <Button type="submit" className="w-full text-lg  mt-2 py-6 bg-teal-400 hover:bg-teal-500 ">Quên mật khẩu</Button>
        <p className="text-center text-xs mb-0 font-normal hover:text-blue-500 cursor-pointer hover:underline" onClick={()=> setChoiseForgetPass(false)}>Quay lại Đăng nhập !</p>
      </form>
      <Toaster/>
    </Form>
  )
}
