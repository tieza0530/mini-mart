"use client"
import { useState } from "react";
import { FormLogin } from "./components/FormLogin";
import { FormForget } from "./components/FormForget";

export default function Login() {
    const [choiseForgetPass, setChoiseForgetPass] = useState(false)
    return (
        <div className="h-full flex justify-center items-center py-20 max-2xl:py-0">
            {!choiseForgetPass ? 
            <FormLogin setChoiseForgetPass={setChoiseForgetPass} />:
            <FormForget setChoiseForgetPass={setChoiseForgetPass}/>
            }
        </div>
    );
}
