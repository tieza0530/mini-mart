"use client"
import { createContext, ReactNode, useContext, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { SessionProvider } from "next-auth/react";

interface AuthContextType {
    dataUser: string | undefined,
    setDataUser: React.Dispatch<React.SetStateAction<string | undefined>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [dataUser, setDataUser] = useState<string | undefined>(undefined)
    return (
        <AuthContext.Provider value={{ dataUser, setDataUser }} >
             <SessionProvider>
            <div className="h-screen flex flex-col justify-between max-[1540px]:mx-40 mx-96">
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