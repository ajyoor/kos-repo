"use client";

// import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { RiMenu5Fill } from "react-icons/ri";
import { Data } from "./ContentContainer";

const NavLink = [
  { title: "about", link: "/" },
  { title: "buy", link: "/" },
  { title: "relocate", link: "/" },
  { title: "sell", link: "/" },
];

const HeaderContainer = () => {
  const router = useRouter();
  // const [search, setSearch] = useState("");

  // const SearchData = (val) => {
  //   let vals = val.toLowerCase();


  // };

  return (
    <div className="px-28 pt-5 flex flex-col gap-4 w-full sm:p-5">
      <div className="flex justify-between">
        <span
          className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3 rounded-xl text-white italic text-2xl font-bold gradient sm:text-xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          nandi
        </span>
        <div className="flex items-center">
          {/* for search */}
          {/* <div className="w-64 relative">
            <CiSearch className="absolute top-[10px] left-3" />
            <input
              className="w-64 border border-gray-400 rounded-md text-sm pl-10 pr-3 py-2"
              type="text"
              placeholder="Cari Nama Kos"
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <div className="w-64 border border-gray-400 rounded-md text-sm p-3 absolute top-[37px] bg-white">
                {search || "Loading..."}
              </div>
            )}
          </div> */}

          {/* many nav */}
          {/* <div className="grid grid-cols-2 gap-x-10 gap-y-2 sm:hidden">
            {NavLink.map((key, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="font-medium text-xs uppercase">
                    {key.title}
                  </span>
                  <div className="rounded-full bg-black w-1 h-1"></div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-2 sm:gap-4">
            <div className="border p-1 w-fit h-fit border-black cursor-pointer">
              <CiSearch className="sm:w-6 sm:h-6" />
            </div>
            <div className="border p-1 w-fit h-fit border-black cursor-pointer">
              <RiMenu5Fill className="sm:w-6 sm:h-6" />
            </div>
          </div> */}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HeaderContainer;
