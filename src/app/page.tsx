import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";
import Image from "next/image";

export default function myName(){
  return <div>
    <Navbar/> 
    <div className='flex flex-wrap'>
          <Image src='/a1.png' alt='about image' width={200} height={200} >

          </Image>
          <Hero/>
        
         </div>
  </div>

}