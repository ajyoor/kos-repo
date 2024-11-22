import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Discover = ({ keys, data, title }) => {

  const router = useRouter();
  return (
    <div key={keys}>
      <div className="absolute top-0 left-0 w-full h-1/4 overflow-hidden -z-10">
        <div className="geometric bg-blue-400 w-10 h-0.5"></div>
        <div className="geometric bg-indigo-400 w-8 h-0.5"></div>
        <div className="geometric bg-purple-400 w-6 h-0.5"></div>
        <div className="geometric bg-green-400 w-12 h-0.5"></div>
        <div className="geometric bg-red-400 w-8 h-0.5"></div>
      </div>
      <div className="px-28 my-40 sm:px-5 sm:w-auto">
        <span
          className={`capitalize text-[100px] flex font-bold sm:text-6xl sm:flex-col ${
            keys === 1 && "justify-end sm:justify-start"
          }`}
        >
          discover{" "}
          <span className="text-orange-500 pl-8 sm:p-0 sm:pt-3 sm:flex sm:items-center">
            {title}
            <div className="text-black hidden w-fit h-fit sm:block sm:ml-5">
              <FaRegArrowAltCircleRight
                className={`${keys === 1 && "rotate-180"} sm:hidden`}
                size={30}
              />
            </div>
          </span>
        </span>
        <div
          className={`w-full flex justify-between items-center gap-3 -mt-3 sm:mt-0 ${
            keys === 1 && "flex-row-reverse"
          }`}
        >
          <hr className="w-full border-black mt-0 sm:w-10" />
          <div className="text-black sm:hidden">
            <FaRegArrowAltCircleRight
              className={`${keys === 1 && "rotate-180"}`}
              size={30}
            />
          </div>
          <span className="font-medium text-base w-auto translate-y-[10px] break-all sm:text-sm sm:break-normal">
            Our projects showcase innovative designs, prime locations, and
            sustainable development offering modern living spaces that elevate
            lifestyle and comfort.
          </span>
        </div>
        <div
          className={`flex gap-5 mt-10 sm:overflow-auto pb-3 sm:flex-wrap ${
            keys === 1 && "justify-end"
          }`}
        >
          {data?.child?.map((key, idx) => {
            return (
              <div
                key={idx + 2}
                className=" transition-transform duration-300 ease-in-out transform hover:scale-110 sm:hover:scale-100 sm:w-full"
                onClick={() =>
                  router.push(`/detail?city=${data.city}&id=${idx}`)
                }
              >
                <Image
                  width={250}
                  height={300}
                  src={key.img[0]}
                  alt="img"
                  className="h-[300px] sm:w-full sm:max-w-full sm:h-[150px] rounded-tl-xl rounded-br-xl object-cover cursor-pointer"
                />
                <span className="text-lg font-bold capitalize">
                  {key.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 overflow-hidden -z-10">
        <div className="geometric bg-blue-400 w-10 h-0.5"></div>
        <div className="geometric bg-indigo-400 w-8 h-0.5"></div>
        <div className="geometric bg-purple-400 w-6 h-0.5"></div>
        <div className="geometric bg-green-400 w-12 h-0.5"></div>
        <div className="geometric bg-red-400 w-8 h-0.5"></div>
      </div>
    </div>
  );
};

export default Discover;
