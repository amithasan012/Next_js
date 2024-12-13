
import Winter_collection from "./components/Winter_collection";
import Carousels from "./components/Carousel_Home";
import Link from "next/link";
import Image from "next/image";
import New_Arrivals from '@/app/assets/New_Arrivals.png'
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
    <div className="h-auto w-full">
    <HeroSection/>
    <div className="flex flex-col justify-center items-center h-auto w-full mt-6 mb-2">
      <h1 className="text-xl font-semibold">Our Products</h1>
      <p>Lorem ipsum is a dummy or placeholder text 
      </p>
    </div>
    <div className="mt-6 mb-5 flex justify-center gap-6">
      <div className="h-auto w-auto">
      <Link href='' className="h-full w-full border-b border-[#F56A29] hover:text-white hover:bg-[#F56A29] py-3 px-8">Mens</Link>
      </div>
      <div className="h-auto w-auto">
      <Link href='' className="h-full w-full border-b border-[#F56A29] hover:text-white hover:bg-[#F56A29] py-3 px-8">Womens</Link>
      </div>
    </div>
    <Carousels></Carousels>
    <Carousels></Carousels>
    <div className="h-auto w-auto flex justify-end">
      <Link className="bg-[#F56A29] hover:text-[#F56A29] hover:bg-white hover:border hover:border-[#F56A29] text-white text-xl p-4 rounded-md mr-[10%] mb-6" href='Collection'>View All Products</Link>
    </div>
    <div className="flex flex-col justify-center items-center h-auto w-full mt-6 mb-2">
      <h1 className="text-3xl ">New Arrivals</h1>
      <Image alt="no image" src={New_Arrivals}></Image>
    </div>
    <Carousels></Carousels>
    <div className="flex flex-col justify-center items-center h-auto w-full mt-6 mb-2">
      <h1 className="text-3xl ">Winter Vacation</h1>
      <Image alt="no image" src={New_Arrivals}></Image>
    </div>
    <Winter_collection></Winter_collection>
  </div>
  );
}
