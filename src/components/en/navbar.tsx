import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icons } from '../ui/icons';
import Link from 'next/link';

const close = () => {
    window.close();
};

function Navbar() {
    const [webviewReady, setWebviewReady] = useState(false);

    useEffect(() => {
        const webview = document.querySelector("webview");
        if (webview) {
            setWebviewReady(true);
        }
    }, []);

    function forward() {
        if (webviewReady) {
            (document.querySelector("webview") as any).goForward();
        }
    }

    function backward() {
        if (webviewReady) {
            (document.querySelector("webview") as any).goBack();
        }
    }

    function anilist() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://anilist.co");

        }
    }

    function animunet() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://animunet.zvbt.space/");

        }
    }

    function gogoanime() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://gogoanime3.co/");

        }
    }

    function nineanime() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://9animetv.to/home");

        }
    }
    function aniwave() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://aniwave.to/home");

        }
    }
    function animeflix() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://animeflix.shop/");

        }
    }
    function netflix() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://www.netflix.com/");
        }
    }
    function crunchyroll() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://www.crunchyroll.com/");
        }
    }


    return (
        <nav className='flex items-center fixed top-0 w-full h-11 mb-10 bg-ctp-crust z-50 shadow-ctp-base opacity-100 3xl:opacity-0' style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}>
            <div className="flex items-center mx-5 3xl:opacity-0" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
                <Link href={'/'}><Image src={"/assets/logo.png"} width={32} height={32} alt='logo' quality={100} className='rounded-full'></Image></Link>
                <div className='ml-5 flex items-center justify-center text-ctp-text'>
                    {/* Anilist */}
                    <Image src="/assets/en/logo/anilist.png" width={20} height={20} className='rounded-md' alt='anilist'/>
                    <a href="#" onClick={anilist} className="ml-2 mr-3 hover:text-ctp-blue">Anilist</a> 
                   {/* Gogo Anime */}
                   <Image src="/assets/en/logo/gogoanime.png" width={20} height={20} className='rounded-md' alt='gogoanime'/>
                    <a href="#" onClick={gogoanime} className="ml-2 mr-3 hover:text-ctp-blue">GoGoAnime</a> 
                    {/* 9anime */}
                    <Image src="/assets/en/logo/9anime.png" width={20} height={20} className='rounded-md' alt='9anime'/>
                    <a href="#" onClick={nineanime} className="ml-2 mr-3 hover:text-ctp-blue">9Anime</a>
                    {/* Aniwave */}
                    <Image src="/assets/en/logo/aniwave.png" width={20} height={20} className='rounded-md' alt='aniwave'/>
                    <a href="#" onClick={aniwave} className="ml-2 mr-3 hover:text-ctp-blue">Aniwave</a>
                    {/* Animeflix */}
                    <Image src="/assets/en/logo/animeflix.png" width={20} height={20} className='rounded-md' alt='animeflix'/>
                    <a href="#" onClick={animeflix} className="ml-2 mr-3 hover:text-ctp-blue">Animeflix</a>
                    {/* Animunet Selfhosted */}
                    <Image src="/assets/en/logo/animunet.png" width={20} height={20} className='rounded-md' alt='animunet'/>
                    <a href="#" onClick={animunet} className="ml-2 mr-3 hover:text-ctp-blue">Animunet</a>
                    {/* Netflix */}
                    <Image src="/assets/fr/logo/netflix.png" width={20} height={20} className='rounded-md' alt='netflix'/>
                    <a href="#" onClick={netflix} className="ml-2 mr-3 hover:text-ctp-blue">Netflix</a>
                    {/* Crunchyroll */}
                    <Image src="/assets/fr/logo/crunchyroll.png" width={20} height={20} className='rounded-md' alt='crunchyroll'/>
                    <a href="#" onClick={crunchyroll} className="ml-2 mr-3 hover:text-ctp-blue">Crunchyroll</a> 
                </div>

            </div>
            <a href="#" onClick={close} style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties} className='absolute top-1/2 mr-5 right-0 transform -translate-y-1/2 w-4'><Icons.close className='fill-current text-ctp-text hover:text-ctp-red'/></a>
            
            <a href="#" onClick={forward} style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties} className='absolute top-1/2 mr-10 right-0 transform -translate-y-1/2 w-4'><Icons.RightArrow className='fill-current text-ctp-text hover:text-ctp-blue'/></a>
            <a href="#" onClick={backward} style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties} className='absolute top-1/2 mr-14 right-0 transform -translate-y-1/2 w-4'><Icons.LeftArrow className='fill-current text-ctp-text hover:text-ctp-blue'/></a>
        </nav>
    );
}

export default Navbar;
