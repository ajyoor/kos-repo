"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Data } from "@/container/ContentContainer";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosPin } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const DetailPage = () => {
  const router = useRouter();
  const qs = useSearchParams();
  const city = qs.get("city");
  const id = qs.get("id");
  const getDataCty = Data?.find((key) => key?.city === city);
  const data = getDataCty.child[id];
  const check = Data.find((key) => key.city === city)?.child;
  const dataLainnya = check?.filter((_, idx) => idx != id);
  const dataLainnyaId = check?.findIndex((_, idx) => idx != id);

  const [selected, setSelected] = useState(data.img[0]);
  return (
    <>
      <div className="flex !justify-start px-28 py-5 items-center w-full gap-5 font-bold text-2xl sm:p-3">
        <IoArrowBackCircleOutline
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        Back
      </div>
      <div className="flex !justify-start px-28 pb-10 sm:p-3">
        {data ? (
          <div className="flex flex-col gap-4">
            <div className="w-full flex gap-5 sm:flex-col">
              <div className="w-[500px] flex flex-col gap-2 sm:w-auto">
                <div className="border rounded-xl">
                  <Image
                    width={200}
                    height={200}
                    alt="img"
                    src={selected}
                    className="rounded-md w-full h-[400px] object-contain cursor-pointer"
                    onClick={() => window.open(selected)}
                  />
                </div>
                <div className="flex gap-2 justify-start">
                  {data.img.map((key, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelected(key)}
                        className="cursor-pointer"
                      >
                        <Image
                          width={200}
                          height={200}
                          alt="img"
                          src={key}
                          className="rounded-md h-[50px] w-24"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-3 border rounded-lg p-3">
                <div className="bg-[#ebebeb] p-3 rounded-md">
                  <span className="font-bold text-4xl sm:text-2xl">{data.title}</span>
                  <div className="font-medium text-base flex gap-4 items-center mt-4 sm:text-sm sm:mt-3">
                    <IoIosPin size={25} className="sm:hidden"/>
                    {data.alamat}
                  </div>
                  <div className="font-medium text-base flex gap-4 items-center mt-4">
                    <IoLogoWhatsapp size={20} />
                    {data.telepon}
                    <div
                      className="rounded-xl text-[10px] bg-slate-100 px-3 uppercase font-bold hover:bg-gradient-to-r hover:text-white from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer"
                      onClick={() =>
                        window.open(`https://wa.me/62${data.telepon.slice(1)}`)
                      }
                    >
                      hubungi
                    </div>
                  </div>
                </div>
                <div className="bg-[#ebebeb] p-2 rounded-md h-full font-medium text-base sm:text-sm">
                  {data.desc}
                </div>
              </div>
            </div>
            {data.map}
          </div>
        ) : (
          "Loading...."
        )}
      </div>
      <div className="flex flex-col gap-5 !justify-start px-28 pb-10 w-full sm:p-3">
        <span className="capitalize font-bold text-xl border-b border-black pb-4 w-fit">
          lihat lainnya dari {city}
        </span>
        <div className="flex gap-3 w-full sm:overflow-auto">
          {dataLainnya &&
            dataLainnya.map((ky, idx) => {
              return (
                <div
                  key={idx}
                  className=" transition-transform duration-300 ease-in-out transform hover:scale-110 sm:hover:scale-100"
                  onClick={() =>
                    router.push(`/detail?city=${city}&id=${dataLainnyaId}`)
                  }
                >
                  <Image
                    width={250}
                    height={300}
                    src={ky.img[0]}
                    alt="img"
                    className="h-[300px] sm:max-w-[500px] sm:h-[200px] rounded-tl-xl rounded-br-xl object-cover cursor-pointer"
                  />
                  <span className="text-lg font-bold capitalize">
                    {ky.title}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
