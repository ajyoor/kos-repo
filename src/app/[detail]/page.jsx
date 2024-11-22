"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Data } from "@/container/ContentContainer";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosPin } from "react-icons/io";
import { IoArrowBackCircleOutline, IoShareOutline } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { BiSolidBath } from "react-icons/bi";
import { MdSevereCold } from "react-icons/md";
import { PiPackageFill } from "react-icons/pi";
import { BiSolidCctv } from "react-icons/bi";
import { MdOutlineWifiPassword } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { PiGarageFill } from "react-icons/pi";

const Overview = [
  {
    title: "Kamar Mandi Dalam",
    icon: <BiSolidBath size={25} />,
  },
  {
    title: "AC",
    icon: <MdSevereCold size={25} />,
  },
  {
    title: "Full Furniture",
    icon: <PiPackageFill size={25} />,
  },
  {
    title: "CCTV 24 Jam",
    icon: <BiSolidCctv size={25} />,
  },
  {
    title: "WiFi",
    icon: <MdOutlineWifiPassword size={25} />,
  },
  {
    title: "Security 24 Jam",
    icon: <MdOutlineSecurity size={25} />,
  },
  {
    title: "Parkir Mobil Motor",
    icon: <PiGarageFill size={25} />,
  },
  null,
  null,
];

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
    <div className="sm:flex sm:flex-col sm:px-3">
      <div className="flex !justify-start px-28 py-5 items-center w-full gap-5 font-bold text-3xl sm:p-3">
        <IoArrowBackCircleOutline
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        Back
      </div>
      {/* main detail */}
      <div className="flex !justify-start px-28 pb-10 sm:p-3">
        {data ? (
          <div className="flex sm:flex-col gap-4">
            <div className="flex flex-col gap-5">
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
                          className="rounded-md h-[80px] w-24"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              {data.map}
            </div>
            <div className="flex flex-col gap-5 border rounded-lg p-5">
              {/* title */}
              <div className="flex w-full justify-between items-center">
                <span className="font-bold text-4xl sm:text-2xl">
                  {data.title}
                </span>
                <div
                  className="bg-gray-100 rounded-xl px-4 py-2 h-fit font-medium text-gray-500 text-xs w-fit flex items-center justify-center gap-2 cursor-pointer hover:font-bold hover:bg-gradient-to-r hover:text-white from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                  onClick={() =>
                    window.open(`https://wa.me/62${data.telepon.slice(1)}`)
                  }
                >
                  <IoShareOutline size={15} className="-mt-1" />
                  Share
                </div>
              </div>
              <hr />
              {/* overview */}
              <ParticleDetail title="overview">
                <ParticleGridDetail data={Overview} />
              </ParticleDetail>
              {/* desc */}
              <ParticleDetail title="description">{data.desc}</ParticleDetail>
              <ParticleDetail title="address">
                <span className="text-base leading-3">{data.alamat}</span>
              </ParticleDetail>
              {/* detail */}
              <ParticleDetail title="details">
                <ParticleGridDetail
                  isDetails
                  data={data.detailKos.map((item) => {
                    const key = Object.keys(item)[0];

                    return {
                      icon: Object.keys(item)[0],
                      title: item[key],
                    };
                  })}
                />
              </ParticleDetail>
            </div>
          </div>
        ) : (
          "Loading...."
        )}
      </div>
      {/* lihat lainnya */}
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
    </div>
  );
};

export default DetailPage;

export const ParticleDetail = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-bold text-xl capitalize">{title}</span>
      <span className="font-medium text-base text-justify">{children}</span>
    </div>
  );
};

export const ParticleGridDetail = ({ data, isDetails }) => {
  return (
    <div
      className={`grid ${
        isDetails ? "grid-cols-2" : "grid-cols-3"
      } rounded-lg shadow-lg border border-gray-200 bg-white`}
    >
      {data.map((item, index) => {
        const box = isDetails ? 2 : 3
        const isLastRow =
          Math.floor(index / box) === Math.floor((Overview.length - 1) / box);
        const isLastColumn = (index + 1) % box === 0;

        return (
          <div
            key={index}
            className={`flex items-center gap-6 py-4 px-7
              ${!isLastRow ? "border-b" : ""}
              ${!isLastColumn ? "border-r" : ""}
              ${!isDetails ? "justify-center " : "justify-between"}
              border-gray-200`}
          >
            <span className="text-sm">{item?.icon}</span>
            <span
              className={`text-sm font-medium ${!isDetails ? "w-32 sm:w-fit" : "w-fit"}`}
            >
              {item?.icon === "Price" && "Rp. "}
              {item?.title}
              {(item?.icon === "Land" || item?.icon === "Size") && " m "}
            </span>
          </div>
        );
      })}
    </div>
  );
};
