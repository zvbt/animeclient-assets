import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

const disabled = {
    filter: 'grayscale(100%)'
  };


export default function Home() {
  return (
    <main>
      <title>AnimeClient</title>
      <div className="ctp-mocha relative h-screen bg-ctp-mantle">
                <Navbar />
                {/* <video 
                src="/assets/videos/6.webm" 
                className='fixed top-0 left-0 w-screen h-screen object-cover z-0 blur-sm'
                autoPlay={true}
                muted={true}
                loop={true}
              ></video> */}
              <Image src={"/assets/background/121.jpg"} alt="" width={1920} height={1080} className="fixed top-0 left-0 w-screen h-screen object-cover z-0 blur-sm"/>
                <div className='absolute block w-screen h-screen border-[8px] border-ctp-crust pointer-events-none z-50'></div>
                <div className="flex flex-col items-center fixed mt-36 top-0 left-0 w-full h-full z-10 text-ctp-text">
                    <h1 className="text-2xl font-semibold text-white">Select your language</h1>
                    <div id="services" className="pt-2">
                        <div className="flex justify-center">
                            <Link href={'/fr'}><Image src={"/assets/flag/france.png"} alt="" width={50} height={50} quality={100} className='mx-2'/></Link>
                            <Link href={'/en'}><Image src={"/assets/flag/uk.png"} alt="" width={50} height={50} quality={100} className='mx-2'/></Link>
                            <Link href={'#'}><Image src={"/assets/flag/germany.png"} alt="" width={50} height={50} quality={100} className='mx-2 cursor-not-allowed' style={disabled}/></Link>
                        </div>
                    </div>
                </div>
            </div>
    </main>
  );
}
