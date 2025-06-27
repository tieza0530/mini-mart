"use client"
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { SessionProvider } from "next-auth/react";
import { UserProps } from "@/app/helper/user.type";
import { getAccessToken } from "@/app/utils/getAccessToken";

interface AuthContextType {
    dataUser: UserProps | undefined,
    setDataUser: React.Dispatch<React.SetStateAction<UserProps | undefined>>
    accessToken: string |undefined
    setAccessToken:  React.Dispatch<React.SetStateAction<string | undefined>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [dataUser, setDataUser] = useState<UserProps | undefined>(undefined)
    const [accessToken, setAccessToken] = useState<string | undefined>(undefined)
    
    const newAccessToken = useCallback(async () => {
        const data = await getAccessToken()
        
        if(data){
            setAccessToken(data.accessToken)
            setDataUser(data.user)
            setTimeout(newAccessToken, 14 * 60 * 1000);
        }
    }, [setAccessToken])

    useEffect(() => {
        if(accessToken === undefined){
            newAccessToken()
        }
    })
  

    return (
        <AuthContext.Provider value={{ dataUser, setDataUser, accessToken , setAccessToken }} >
             <SessionProvider>
            <div className="h-screen flex flex-col justify-between max-[1540px]:mx-36 mx-96">
                <Header />
                <div className="my-10">
                {children}
                </div>
                <Footer />
            </div>
            </SessionProvider>
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth phải được dùng trong AuthProvider");
    return context;
}