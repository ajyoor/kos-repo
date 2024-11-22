"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { GiDeathStar } from "react-icons/gi";
import Discover from "@/components/Discover";
import Testimoni from "./particles/Testimoni";
import Fasilitas from "./particles/Fasilitas";

export const Data = [
  {
    city: "sidoarjo",
    child: [
      {
        title: "Kos Pilar Putih",
        desc: "???",
        alamat: "???",
        telepon: "PIRO BANGG???",
        map: "????",
        img: [
          "/sidoarjo/kospilarputih/kpp1.jpg",
          "/sidoarjo/kospilarputih/kpp2.jpg",
        ],
        detailKos: [
          { Bedrooms: 1 },
          { Bathrooms: 1 },
          { Price: 1 },
          { Year: 1 },
          { Size: 1 },
          { Land: 1 },
        ],
      },
      {
        title: "Kos Putih",
        desc: "ini desc kos2",
        alamat:
          "Unnamed Road, Banjarpoh, Banjarbendo, Sidoarjo, Sidoarjo Regency, East Java 61225",
        telepon: "PIRO BANGG???",
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0952869993666!2d112.6974036!3d-7.4547101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1e679307db7%3A0x745553e24d321a24!2sRumah%20kost%20putih!5e0!3m2!1sid!2sid!4v1731588516559!5m2!1sid!2sid"
            width="400"
            height="400"
            style={{
              width: "100%",
              height: "300px",
              border: 0,
              borderRadius: "10px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ),
        img: [
          "/sidoarjo/kostputih/kp1.jpg",
          "/sidoarjo/kostputih/kp2.jpg",
          "/sidoarjo/kostputih/kp3.jpg",
          "/sidoarjo/kostputih/kp4.jpg",
          "/sidoarjo/kostputih/kp5.jpg",
        ],
        detailKos: [
          { Bedrooms: 1 },
          { Bathrooms: 1 },
          { Price: 1 },
          { Year: 1 },
          { Size: 1 },
          { Land: 1 },
        ],
      },
    ],
  },
  {
    city: "kediri",
    child: [
      {
        title: "Kos VIP Rumah Kita",
        alamat:
          "Jl. Panglima Besar Sudirman No.2500, Selotopeng, Manyaran, Kec. Banyakan, Kabupaten Kediri, Jawa Timur 64157",
        telepon: "082232272850",
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1404870888696!2d111.96908117561905!3d-7.77492429224461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7851b0a53935e1%3A0x35893dc50457218!2sKost%20VIP%20Rumah%20Kita!5e0!3m2!1sid!2sid!4v1731588187435!5m2!1sid!2sid"
            width="400"
            height="400"
            style={{
              width: "100%",
              height: "300px",
              border: 0,
              borderRadius: "10px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ),
        desc: "ini desc kos1 kediri",
        img: [
          "/kediri/kostvip/kv1.jpg",
          "/kediri/kostvip/kv2.jpg",
          "/kediri/kostvip/kv3.jpg",
          "/kediri/kostvip/kv4.jpg",
          "/kediri/kostvip/kv5.jpg",
          "/kediri/kostvip/kv6.jpg",
        ],
        detailKos: [
          { Bedrooms: 1 },
          { Bathrooms: 1 },
          { Price: 1 },
          { Year: 1 },
          { Size: 1 },
          { Land: 1 },
        ],
      },
      {
        title: "Rumah Ijoe 2",
        alamat:
          "Jalan Jongbiru, Gang 1, Jongbiru, Gampengrejo, Jongbiru, Kec. Gampengrejo, Kabupaten Kediri, Jawa Timur 64182",
        telepon: "082331386691",
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.014509499433!2d112.01017569999999!3d-7.788285699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7850d23dd62725%3A0x16cb3c238a84c134!2sRumah%20Ijoe%202!5e0!3m2!1sid!2sid!4v1731549379193!5m2!1sid!2sid"
            width="400"
            height="400"
            style={{
              width: "100%",
              height: "300px",
              border: 0,
              borderRadius: "10px",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ),
        desc: "ini desc kos2 kediri",
        img: [
          "/kediri/rumahijoe/ijo1.jpeg",
          "/kediri/rumahijoe/ijo2.jpeg",
          "/kediri/rumahijoe/ijo3.jpeg",
          "/kediri/rumahijoe/ijo4.jpeg",
          "/kediri/rumahijoe/ijo5.jpeg",
          "/kediri/rumahijoe/ijo6.jpeg",
        ],
        detailKos: [
          { Bedrooms: 1 },
          { Bathrooms: 1 },
          { Price: 1 },
          { Year: 1 },
          { Size: 1 },
          { Land: 1 },
        ],
      },
    ],
  },
];

const ContentContainer = () => {
  const [selectedDataSection1, setSelectedDataSection1] = useState(1);
  const sectionsRef = useRef([]);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      e.preventDefault();
      const { deltaY } = e;

      const currentSection = sectionsRef.current.reduce(
        (closestIdx, section, index) => {
          const top = section.getBoundingClientRect().top;
          return Math.abs(top) <
            Math.abs(
              sectionsRef.current[closestIdx].getBoundingClientRect().top
            )
            ? index
            : closestIdx;
        },
        0
      );

      if (deltaY > 0 && currentSection < sectionsRef.current.length - 1) {
        sectionsRef.current[currentSection + 1].scrollIntoView({
          behavior: "smooth",
        });
      } else if (deltaY < 0 && currentSection > 0) {
        sectionsRef.current[currentSection - 1].scrollIntoView({
          behavior: "smooth",
        });
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="w-full relative sm:flex sm:flex-col-reverse h-screen flex flex-col justify-center"
      >
        <div className="block sm:hidden">
          {/* welcome to your new */}
          <div className="flex gap-8 mr-20 justify-end h-[400px] relative sm:h-fit sm:m-0">
            <Image
              width={300}
              height={500}
              src="https://random-image-pepebigotes.vercel.app/api/random-image"
              alt="img"
              className="sm:hidden shadow-md rounded-md"
            />
            <div className="flex flex-col gap-3 w-[400px] pt-8 font-light text-black sm:flex-row">
              <span className="text-base">
                Welcome to your new home, designed for comfort and style. Each
                space reflects your lifestyle, offering a place to truly belong.
                Begin your journey today and find a home you&apos;ll love.
              </span>
              <div className="p-4 border border-black h-fit w-fit sm:h-full sm:flex sm:items-center">
                <IoIosArrowForward size={30} />
              </div>
            </div>
          </div>
          {/* homes made for you & image selected */}
          <div className="flex justify-between sm:flex-col h-[200px]">
            <div className="capitalize pl-28 flex flex-col -mt-[370px] sm:px-5 sm:mt-0 w-[80%]">
              <GiDeathStar className="sm:w-16 sm:mx-auto" size={80} />
              <span className="font-medium text-[60px] sm:text-[50px]">
                homes
              </span>
              <span className="italic font-semibold text-orange-500 text-[150px] -mt-8 sm:text-[100px]">
                made
              </span>
              <span className="flex items-center gap-5 font-bold text-[120px] -mt-8 sm:text-[80px]">
                <BsArrowDownRight className="-rotate-45 sm:w-10" />
                for you
              </span>
            </div>
            {/* image selected */}
            <div className="flex items-center gap-12 pr-28 -mt-56 sm:hidden z-20">
              {Array(
                "/kediri/kostvip/kv1.jpg",
                "/kediri/kostvip/kv4.jpg",
                "/kediri/rumahijoe/ijo3.jpeg"
              ).map((key, idx) => {
                if (idx + 1 === selectedDataSection1)
                  return (
                    <div key={idx}>
                      <Image
                        width={500}
                        height={500}
                        src={key}
                        alt="image"
                        className="sm:!w-60 sm:!h-60 max-w-[400px] masx-h-[400px] shadow-xl rounded-md"
                      />
                    </div>
                  );
              })}
              <div className="flex flex-col gap-3">
                {Array(3)
                  .fill()
                  .map((_, idx) => {
                    return (
                      <div
                        key={idx + 1}
                        className={`border ${
                          idx + 1 === selectedDataSection1 && "border-black"
                        } p-3 w-fit h-fit cursor-pointer relative hover:border-black`}
                        onClick={() => setSelectedDataSection1(idx + 1)}
                      >
                        {idx + 1 === selectedDataSection1 && (
                          <hr className="absolute -left-36 top-6 w-36 border-black" />
                        )}
                        <span className="font-bold">0{idx + 1}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* cursor */}
          <div className="text-black flex flex-col items-center z-50 gap-1 text-center">
            <Image src="/scroll.svg" width={35} height={35} alt="scroll" />
            <p className="capitalize text-xs font-semibold rounded-lg">
              Scroll down
            </p>
          </div>
        </div>
        <div className="hidden sm:flex flex-col w-auto gap-8">
          <div className="capitalize mr-20 flex flex-col sm:px-5 sm:mt-0">
            <GiDeathStar className="" size={80} />
            <span className="font-medium text-[60px] sm:text-[50px]">
              homes
            </span>
            <span className="italic font-semibold text-orange-500 text-7xl">
              made
            </span>
            <span className="flex items-center gap-5 font-bold text-[50px]">
              <BsArrowDownRight className="-rotate-45 sm:w-10" />
              for you
            </span>
          </div>
          <div className="px-5 text-justify font-light text-black text-base leading-relaxed">
            Welcome to your new home, designed for comfort and style. Each space
            reflects your lifestyle, offering a place to truly belong. Begin
            your journey today and find a home you&apos;ll love.
          </div>
          <div className="text-black flex flex-col items-center z-50 gap-1 text-center">
            <Image src="/scroll.svg" width={35} height={35} alt="scroll" />
            <p className="capitalize text-xs font-semibold rounded-lg">
              Scroll down
            </p>
          </div>
        </div>
      </div>
      {/* discover */}
      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="h-screen flex items-center relative"
      >
        <Discover keys={1} title="sidoarjo" data={Data[0]} />
      </div>
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="h-screen flex items-center relative"
      >
        <Discover keys={2} title="kediri" data={Data[1]} />
      </div>
      {/* our facility */}
      <div
        ref={(el) => (sectionsRef.current[3] = el)}
        className="h-screen flex items-center relative"
      >
        <Fasilitas />
      </div>
      {/* our testimoni */}
      <div
        ref={(el) => (sectionsRef.current[4] = el)}
        className="h-screen flex items-center relative"
      >
        <Testimoni />
      </div>
    </>
  );
};

export default ContentContainer;
