'use client'

import { supabase } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { useEffect, useState } from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    

    
    // useEffect(() => {
    //     // Redirect to login page if user is not logged in
    //     if (!isLoading && !isLoggedIn) {
    //       redirect("/auth/sign-in"); // Replace "/login" with your actual login page route
    //     }
    //   }, [isLoading, isLoggedIn]);

    

    return (
        <>
            {children}
        </>
    )
}