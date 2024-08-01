'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/fr/navbar";
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [description, setDescription] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestReleaseDescription = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/zvbt/AnimeClient/releases/latest');
        setDescription(response.data.body);
      } catch (error) {
        console.error('Error fetching the latest release description:', error);
        setDescription('Failed to load the latest release description.');
      }
    };

    fetchLatestReleaseDescription();
  }, []);

  return (
    <main>
      <div className="ctp-mocha h-screen bg-ctp-mantle text-ctp-text flex justify-center items-center">
        <Image src={"/assets/background/121.jpg"} alt="" width={1920} height={1080} className="fixed top-0 left-0 w-screen h-screen object-cover z-0 blur-sm"/>
        <div className='w-full h-full bg-ctp-crust opacity-50 z-10 absolute'></div>
        <div className='z-50 p-8 bg-ctp-crust bg-opacity-75 rounded-lg'>
          <h1 className='text-3xl text-center'>Changelogs</h1>
          <div className='mt-5'>
            {description ? (
              <ReactMarkdown>{description}</ReactMarkdown>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
