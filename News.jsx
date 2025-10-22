import NewsCard from "./NewsCard"

export default function News() {
    return (
        <>
              <div className="flex pt-[40px] bg-blue-600 dark:bg-gray-100 w-[100%] px-[150px] h-[120px]">
              <h1 className="font-bold text-2xl text-red-50 dark:text-black/70"><span className="w-[50px] h-[50px] rounded-[50px] "></span> <span className="text-black">NEWS</span> TODAY</h1>  
              
     <form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-black dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-[400px] p-2 ps-10 text-sm text-gray-900 border border-white/50 dark:border-gray-300 rounded-sm focus:ring-black dark:focus:ring-black focus:border-white/30 dark: dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-gray-100 dark:focus:border-gray-100" placeholder="Search News Today" required />
        {/* <button type="submit" class="text-white absolute  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
    </form> <br/>

            </div>
      <div className="relative gap-[10px] h-full px-[150px]">        
            <nav className="">
         <ul className="flex gap-[90px] pt-[35px] font-sans  mb-[40px] font-semibold z-10">
            <li className="hover:text-blue-600 hover:underline dark:hover:text-white hover:scale-110 hover:cursor-pointer hover:font-bold ">HOME</li>
            <li className="hover:text-blue-600 hover:underline dark:hover:text-white hover:scale-110 hover:cursor-pointer hover:font-bold ">SPORTS</li>
            <li  className="hover:text-blue-600 hover:underline dark:hover:text-white hover:scale-110 hover:cursor-pointer hover:font-bold ">BUSINESS</li>
            <li className="hover:text-blue-600 hover:underline dark:hover:text-white hover:scale-110 hover:cursor-pointer hover:font-bold ">TECH</li>
            <li  className="hover:text-blue-600 hover:underline dark:hover:text-white hover:scale-110 hover:cursor-pointer hover:font-bold ">POLITICS</li>
            <li  className="hover:text-blue-600 hover:underline dark:hover:text-white hover:scale-110 hover:cursor-pointer hover:font-bold ">HEALTH</li>
            {/* <li  className="hover:text-red-900 dark:hover:text-white">CROSSWORDS</li>
            <li  className="hover:text-red-900 dark:hover:text-white">WASHINGTON</li>
            <li  className="hover:text-red-900 dark:hover:text-white">VIDEO</li>
            <li  className="hover:text-red-900 dark:hover:text-white">STOCKS</li>
            <li  className="hover:text-red-900 dark:hover:text-white">APPS</li> */}
         </ul>
            </nav>
            </div>  
            
            <hr className="text-black/10 dark:text-black/10"/>
           <div>
           
           </div>
        
        </>
    )
}