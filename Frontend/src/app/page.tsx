"use client"

import Button from "@/components/buttons";
import CustomModal from "@/components/customModal";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Home() {

  const [showLoginModal,setShowLoginModal] =useState(false);
  const [showSignupModal,setShowSignupModal] =useState(false);


  return (

    <>
    <CustomModal isOpen={showLoginModal} title="Welcome" isLogin={true} onClose={()=>setShowLoginModal(false)}></CustomModal>
    <CustomModal isOpen={showSignupModal} title="Welcome" isRegister={true} onClose={()=>setShowSignupModal(false)}></CustomModal>

      <div className="min-h-screen min-w-screen relative flex flex-col">
        <div className="flex justify-between items-center px-16 pt-8 text-white">
          <div className="text-xl tracking-tighter">Smart Planner</div>

          <div className="flex gap-4">
            <Button size="sm" variant="outline" className="transform transition-transform hover:scale-105 hover:shadow-xl" onClick={()=>setShowLoginModal(true)}>Log In</Button>
            <Button size="sm" variant="primary" onClick={()=>setShowSignupModal(true)}>Register Now</Button>
          </div>
        </div>

        <div className="flex flex-1 w-full justify-between items-center px-16">
          <div className="max-w-lg">
            <div className="text-4xl md:text-6xl font-semibold">

              <h1 className="leading-snug text-black">
                From
                Chaos to{" "}
                <span className="bg-gradient-to-r from-[#6A3FFB] to-[#FF2E63] text-transparent bg-clip-text block">
                  Clearity
                </span>
              </h1>
              <h1 className="font-normal pt-4">Only One Click Away!</h1>
            </div>
            <div className="flex rounded group">

              <Button size="xl" variant="primary" className="mt-8 transform transition-transform  duration-500 ease-in-out hover:scale-105" onClick={()=>setShowSignupModal(true)}>Get Started
                <div className="ml-4">
                  <ChevronRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </div>
              </Button>
            </div>


          </div>

          <div className="w-1/2 ml-96 pl-36">
            <div className="border w-96 h-96 border-gray-300 rounded-full bg-pink">

              <div className="border w-80 h-80 border-gray-300 rounded-full bg-pink">
                <div className="border w-72 h-72 border-gray-300 rounded-full bg-pink">

                  <div className="border w-64 h-64 border-gray-300 rounded-full bg-pink">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
