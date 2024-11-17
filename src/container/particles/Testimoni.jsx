"use client";

import { useState } from "react";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Testimonial = [
  {
    name: "Refo Fatahillah",
    email: "qcaz2@gmail.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe obcaecati libero placeat illo ratione dolores eos voluptate debitis maxime eligendi tenetur id neque cupiditate repudiandae quibusdam veritatis, sed eaque consequuntur! Ipsa reiciendis in tempore corporis quos! Facilis inventore adipisci ratione.",
  },
  {
    name: "Refo Fatahillah 2",
    email: "qcaz2@gmail.com",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quasi eius ea eaque dolor beatae labore quisquam voluptatem sit voluptate?",
  },
  {
    name: "Refo Fatahillah 3",
    email: "qcaz2@gmail.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, perferendis.",
  },
  {
    name: "Refo Fatahillah 4",
    email: "qcaz2@gmail.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quisquam ipsum, minus veritatis necessitatibus velit neque illo ab autem repellendus alias magnam, harum, odio incidunt nobis debitis perspiciatis? Laborum eaque amet repudiandae fugit. Provident temporibus quos, alias, rerum tempora ex dolor aliquam repellendus possimus repellat, saepe molestias tenetur rem accusamus? Eum temporibus impedit voluptatum assumenda dolor quos, soluta magni aliquid, nulla enim omnis amet atque nesciunt voluptas, at cumque provident distinctio id numquam ipsam hic! Quae molestiae deserunt velit pariatur excepturi dicta quam. Libero dolorum delectus asperiores saepe suscipit quidem quisquam quos enim nemo minima impedit, illum vitae harum animi.",
  },
  {
    name: "Refo Fatahillah 5",
    email: "qcaz2@gmail.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe obcaecati libero placeat illo ratione dolores eos voluptate debitis maxime eligendi tenetur id neque cupiditate repudiandae quibusdam veritatis, sed eaque consequuntur! Ipsa reiciendis in tempore corporis quos! Facilis inventore adipisci ratione.",
  },
];

const Testimoni = ({ ...props }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  return (
    <>
      <div class="absolute top-0 left-0 w-full h-1/4 overflow-hidden -z-10">
        <div class="particle w-2 h-2 bg-indigo-400"></div>
        <div class="particle w-3 h-3 bg-purple-400"></div>
        <div class="particle w-1.5 h-1.5 bg-pink-400"></div>
        <div class="particle w-4 h-4 bg-blue-400"></div>
        <div class="particle w-2.5 h-2.5 bg-green-400"></div>
        <div class="particle w-3 h-3 bg-yellow-400"></div>
        <div class="particle w-1 h-1 bg-red-400"></div>
      </div>
      <div className="px-28 sm:px-5">
        <span className="capitalize text-[100px] font-bold sm:text-6xl">
          testimonial
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
        <div className="flex gap-36 mt-16 sm:overflow-y-auto sm:overflow-x-hidden pb-3 sm:flex-col sm:gap-7">
          <div className="w-[400px] sm:w-auto h-fit flex gap-5 items-center">
            <Image
              width={64}
              height={64}
              src="https://random-image-pepebigotes.vercel.app/api/random-image"
              alt="img"
              className="h-16 sm:max-w-[50px] sm:h-[50px] rounded-full"
            />
            <div className="flex flex-col items-cen sw-24">
              <span className="font-bold text-base">
                {Testimonial[selectedTestimonial].name}
              </span>
              <span className="font-medium text-sm">
                {Testimonial[selectedTestimonial].email}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <p className="max-h-44 overflow-auto">
              {Testimonial[selectedTestimonial].desc}
            </p>
            <div className="flex gap-5 justify-between items-center">
              <FaRegArrowAltCircleRight
                className="rotate-180"
                onClick={() => {
                  if (selectedTestimonial === 0) return false;
                  return setSelectedTestimonial(selectedTestimonial - 1);
                }}
                color={`${selectedTestimonial === 0 ? "gray" : "black"}`}
                size={30}
              />
              <span className="font-bold">{selectedTestimonial + 1}</span>
              <hr className="w-full border border-black" />
              <span className="font-bold">{Testimonial.length}</span>
              <FaRegArrowAltCircleRight
                onClick={() => {
                  if (selectedTestimonial === 4) return false;
                  return setSelectedTestimonial(selectedTestimonial + 1);
                }}
                color={`${
                  Testimonial.length - 1 === selectedTestimonial
                    ? "gray"
                    : "black"
                }`}
                size={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full h-1/4 overflow-hidden -z-10">
        <div class="particle w-2 h-2 bg-indigo-400"></div>
        <div class="particle w-3 h-3 bg-purple-400"></div>
        <div class="particle w-1.5 h-1.5 bg-pink-400"></div>
        <div class="particle w-4 h-4 bg-blue-400"></div>
        <div class="particle w-2.5 h-2.5 bg-green-400"></div>
        <div class="particle w-3 h-3 bg-yellow-400"></div>
        <div class="particle w-1 h-1 bg-red-400"></div>
      </div>
    </>
  );
};

export default Testimoni;
