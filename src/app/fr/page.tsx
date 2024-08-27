'use client'
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/fr/navbar";

export default function Home() {
  return (
    <main>
<div className="ctp-mocha relative h-screen bg-ctp-mantle">
                <Navbar />
                <div className='absolute block w-screen h-screen border-[8px] border-ctp-crust pointer-events-none z-50 3xl:opacity-0'></div>
                <div className="fixed top-10 left-0 w-screen h-screen z-10 text-ctp-text 3xl:top-0">
                    <webview src='./changelogs' className='px-[8px] 3xl:px-0 w-full h-[94.7%]' id='loader'></webview>
                </div>
            </div>
    </main>
  );
}
