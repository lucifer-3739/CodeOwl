"use client"
import { authClient } from "@/lib/auth-client"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";

export function Logout() {
    const Router = useRouter();
    const handleLogout = async () => {
        await authClient.signOut();
        Router.push("/");
    }
    return <Button onClick={handleLogout}>Logout</Button>
}