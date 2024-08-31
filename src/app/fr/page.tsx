'use client'
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/fr/navbar";

export default function Home() {
  return (
    <main>
      <div className="ctp-mocha relative h-screen bg-ctp-mantle">
          <Navbar />
            <div className='absolute block w-screen h-screen border-[8px] border-ctp-crust pointer-events-none z-50 1080:border-[0px] 900:border-[0px] 720:border-[0px]'></div>
                <div className="flex top-10 left-0 w-screen h-screen z-10 text-ctp-text 1080:top-0 900:top-0 720:top-0">
                    <webview src='./changelogs' className='w-screen h-screen  px-[8px] pt-[44px] pb-[8px] 1080:p-0 900:p-0 720:p-0' id='loader'></webview>
                </div> 
      </div>
    </main>
  );
}
