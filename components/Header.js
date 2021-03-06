import Image from "next/image";
import {
  SearchIcon,
  SearchPlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
function Header() {
  return (
    <div
      className="shadow-sm border-b bg-white sticky top-0
    "
    >
      <div
        className="flex justify-between bg-white max-w-6xl 
mx-5 lg:mx-auto"
      >
        {/* Left */}
        <div
          className="relative  w-24 hidden lg:inline-grid
        cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="relative  w-10  lg:hidden flex-shrink-0
        cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div
              className="absolute inset-y-0 pl-3 flex items-center
          pointer-events-none"
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="
            sm:text-sm
            border-gray-300 
            rounded-md
            focus:ring-black
            focus:border-black
          bg-gray-50 w-full pl-10"
            />
          </div>
        </div>

        {/* Right */}
        <div
          className="flex items-center justify-center
         space-x-4"
        >
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div
              className="absolute -top-2 -right-1 
            cursor-pointer text-xs w-5 bg-red-500 rounded-full
            flex items-center justify-center animate-pulse text-white"
            >
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://links.papareact.com/3ke"
            className="h-10 
          rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
