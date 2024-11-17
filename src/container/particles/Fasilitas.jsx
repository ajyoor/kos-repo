import Image from "next/image";
import Link from "next/link";
import {
  FaArrowAltCircleRight,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Facility = [
  {
    title: "innovative living spaces",
    desc: "Blending technologt with modern design to create exceptional, forward-thinking homes.",
    link: "#",
  },
  {
    title: "sustainable communities",
    desc: "Building eco-friendly neighborhoods that enhance quality of life and environmental responsibility.",
    link: "#",
  },
  {
    title: "exceptional real estate",
    desc: "delivering top-tier properties and unmatched service for a superior real estate experience.",
    link: "#",
  },
  {
    title: "quality craftsmanship",
    desc: "ensuring meticulous attention to detail and superior construction for lasting value.",
    link: "#",
  },
];

const Fasilitas = () => {
  return (
    <>
      {/* <div class="absolute top-0 left-0 w-full h-1/4 overflow-hidden -z-10">
        <div class="triangle bg-blue-400"></div>
        <div class="triangle bg-pink-400"></div>
        <div class="triangle bg-green-400"></div>
        <div class="triangle bg-yellow-400"></div>
        <div class="triangle bg-purple-400"></div>
      </div> */}
      <div className="px-28 sm:px-5">
        <span className="capitalize text-[100px] font-bold sm:text-6xl">
          our facility
        </span>
        <div className="w-full flex justify-between items-center gap-3 -mt-3 sm:mt-0">
          <hr className="w-[430px] border-black mt-0 sm:w-10" />
          <FaRegArrowAltCircleRight size={50} className="sm:hidden" />
          <span className="font-medium text-base w-auto translate-y-[10px] break-all sm:text-sm sm:break-normal">
            Our projects showcase innovative designs, prime locations, and
            sustainable development offering modern living spaces that elevate
            lifestyle and comfort.
          </span>
        </div>
        <div className="flex gap-5 mt-16 sm:overflow-auto pb-3">
          <Image
            width={400}
            height={400}
            src="https://random-image-pepebigotes.vercel.app/api/random-image"
            alt="img"
            className="h-[400px] sm:max-w-[500px] sm:h-[200px] rounded-tl-xl rounded-br-xl shadow-lg sm:hidden"
          />
          <div className="flex flex-wrap justify-between w-full gap-x-3 sm:gap-y-3">
            {Facility.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-normal w-[48%] ${
                    idx + 1 < 3 ? "border-y sm:border" : "border-b sm:border"
                  } py-7 border-black sm:rounded-xl sm:p-5 sm:gap-3`}
                >
                  <span className="capitalize font-bold text-xl sm:text-base">
                    {item.title}
                  </span>
                  <span className="font-medium text-base sm:text-sm">
                    {item.desc}
                  </span>
                  {/* <Link
                    href={item.link}
                    className="font-bold text-base flex items-center gap-2"
                  >
                    <FaArrowAltCircleRight size={30} />
                    Learn more
                  </Link> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div class="absolute bottom-0 left-0 w-full h-1/4 overflow-hidden -z-10">
        <div class="triangle bg-indigo-400"></div>
        <div class="triangle bg-pink-400"></div>
        <div class="triangle bg-blue-400"></div>
        <div class="triangle bg-purple-400"></div>
        <div class="triangle bg-yellow-400"></div>
      </div> */}
    </>
  );
};

export default Fasilitas;
