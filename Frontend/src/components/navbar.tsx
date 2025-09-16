"use client";

import { LogOut, LogOutIcon } from "lucide-react";
import Button from "./buttons";
import { useState } from "react";

export default function Navbar() {

    const [active,setActive]= useState("1");

    return (
        <>
            <div className="flex w-full h-16 justify-between bg-black/90 sticky top-0 z-50 p-4 ">
                <div className="text-xl tracking-tighter">Smart Planner</div>
                <div className="flex gap-4 w-auto h-auto">
                    <Button size="sm" variant="outline" active={active === "1"? true :false } onClick={()=>setActive("1")}>Profile</Button>
                    <Button size="sm" variant="outline" active={active === "2"? true :false }  onClick={()=>setActive("2")}>Performance</Button>
                    <Button size="sm" variant="outline" active={active === "3"? true :false }  onClick={()=>setActive("3")}>Settings</Button>
                </div>
                <div className="flex gap-4 w-auto h-auto">                 
                    <Button size="sm" variant="destructive" startIcon={<LogOut />}></Button>
                </div>
            </div>
        </>
    );
}