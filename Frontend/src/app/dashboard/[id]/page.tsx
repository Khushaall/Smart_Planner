"use client";

import Navbar from "@/components/navbar";
import TaskTable from "@/components/taskTable";
import { RootState } from "@/lib/store";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Page({ params }: { params: { id: string } }) {

  const isLoggedIn = useSelector((state:RootState)=>state.auth);

  if (!isLoggedIn) {
    redirect("/");
  }

  return (
    <>
    <div className="bg-[#121212] text-[#e5e5e5] h-full w-full">
      <Navbar />
      <div className="pt-4 pl-4">
        <h1 className="text-2xl font-bold pr-4">{params.id} Dashboard</h1>
      </div>
      <div className="bg-black/50 h-auto w-auto m-4 rounded-xl pb-8">
        <div className="flex flex-col gap-8 w-full p-4">

          <TaskTable
            title="Tickets In Progress"
            className="bg-gradient-to-l from-[#A78BFA] via-[#6A3FFB] to-[#2B0345]"
          />

          <TaskTable
            title="Open Tickets"
            className="bg-gradient-to-l from-[#D9F3FF] via-[#80D4FF] to-[#005F99]"
          />

          <TaskTable
            title="Closed Tickets"
            className="bg-gradient-to-l from-[#FFD9C7] via-[#FF8A80] to-[#6A3FFB]"
          />


        </div>
      </div>
    </div>
    

    </>
  );
}
