
import Sidebar from "./components/Sidebar"

export default function RootLayout({children}){
    return(
        <>
             <h1 className='text-3xl font-bold p-11 '>Home / <span className='text-3xl font-bold text-[#F56A29]'>Collection</span></h1>

            <div className="h-[80vh] w-full flex justify-center max-md:flex-col max-md:h-auto max-md:text-base max-md:items-center">
                <div className="h-[70%] w-[30%] ">
                    <Sidebar/>
                </div>
                <div className="h-[90%] w-[60%] ">
                    {children}
                </div>
            </div>
  
        </>
    )
}