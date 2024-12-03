'use client';
import { useState, useEffect } from "react";
import Dashboard from "./dashboard/page";
import { supabase } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default function AdminPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

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
            {isLoggedIn ? <Dashboard /> : redirect("/admin/sign-in")}
        </>
    );
};