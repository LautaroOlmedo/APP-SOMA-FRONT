import axios from "axios";
import { useEffect, useState } from "react";
//import { axiosInstance } from "../base.api";
import { VERIFY_TOKEN } from "../endpoints";

export const useAuthVerification = () => {
    const token = localStorage.getItem("token")
    const [auth, setAuth] = useState<{ error: unknown, response: boolean | null}>()

    useEffect(() =>{
        verifyToken(token)
    },[token])

    const verifyToken = async (token: string | null) => {
        try {
            const response = await axios.post<boolean>(`http://localhost:8000/api/${VERIFY_TOKEN}`, { token })
            setAuth({ error: null, response: response.data })
        } catch (error) {
            localStorage.removeItem("token")
            setAuth({ error, response: null })
        }
    }

    return auth
}


 
