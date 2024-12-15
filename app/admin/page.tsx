'use client';
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default function AdminPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const router = useRouter()

    async function getUser() {

        try {
            const
                {data, error} = await supabase.auth.getUser()
            if (error || !data?.user) {
                setIsLoggedIn(false)
            } else {
                setIsLoggedIn(true)
            }
        } catch (error) {
            console.error(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    },[])


    return (
        <>
            {isLoggedIn ? redirect("/mainPages") : redirect("/sign-in")}
        </>
    );
};