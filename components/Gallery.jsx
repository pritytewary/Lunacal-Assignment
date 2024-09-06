"use client";
import { useRef, useState } from "react";

import { GoQuestion } from "react-icons/go";
import { FaGripVertical } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";

export default function Gallery() {
  const [images, setImages] = useState([
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
  ]);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const child = scrollRef.current.children[0];
      const childWidth = child.offsetWidth;

      scrollRef.current.scrollBy({
        left: -(childWidth + 24),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const child = scrollRef.current.children[0];
      const childWidth = child.offsetWidth;

      scrollRef.current.scrollBy({ left: childWidth + 24, behavior: "smooth" });
    }
  };

  const addImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    const fileUrl = await new Promise((resolve, reject) => {
      input.onchange = async (e) => {
        const file = e.target.files[0];
        const blobUrl = URL.createObjectURL(file);
        resolve(blobUrl);
      };
    });

    setImages((i) => [fileUrl, ...i]);
  };

  return (
    <div>
      <div
        className="rounded-3xl bg-[#363C43] flex"
        style={{ boxShadow: "5.67px 5.67px 3.78px 0px #00000066" }}
      >
        <div className="flex items-center flex-col  ml-3 mt-2 pt-6">
          <GoQuestion size={24} className=" text-[#A3ADBA]" />
          <FaGripVertical size={25} className="text-[#4A4E54] mt-20" />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-4 px-6 pt-6">
            <h2 className="text-base font-light flex items-center justify-center text-white shadow-sm bg-black bg-op px-6 rounded-2xl p-3 w-32 h-">
              Gallery
            </h2>
            <div className="flex items-center space-x-5">
              <button
                className="
                relative w-[131.32px] h-[46px]
                bg-white bg-opacity-[0.03]
                rounded-full
                text-white text-sm
                font-light
                font-mono
                hover:bg-opacity-[0.06] transition-colors
                overflow-hidden
              "
                style={{
                  transform: "rotate(180deg)",
                  boxShadow: `
                  inset 0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15),
                  inset 0px 0px 48.91px 0px rgba(255, 255, 255, 0.05),
                  9px 10px 7.1px 0px rgba(0, 0, 0, 0.40),
                  -0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25)
                `,
                }}
                onClick={addImage}
              >
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: "rotate(180deg)" }}
                >
                  + ADDIMAGE
                </span>
              </button>
              <div className="flex space-x-2">
                <button
                  onClick={scrollLeft}
                  className="
                  relative w-[45px] h-[45px] rounded-full
                  overflow-hidden transition-transform duration-300 ease-in-out
                  hover:scale-105 focus:outline-none
                "
                  style={{
                    background: "linear-gradient(to bottom, #303439, #161718)",
                    boxShadow: `
                    4px 5px 30px 5px rgba(16, 18, 19, 0.75),
                    -5px -3px 30px -10px rgba(150, 190, 231, 0.75)
                  `,
                  }}
                >
                  <MdArrowBack className="h-6 w-6 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </button>
                <button
                  onClick={scrollRight}
                  className="
                  relative w-[45px] h-[45px] rounded-full
                  overflow-hidden transition-transform duration-300 ease-in-out
                  hover:scale-105 focus:outline-none
                "
                  style={{
                    background: "linear-gradient(to bottom, #303439, #161718)",
                    boxShadow: `
                    4px 5px 30px 5px rgba(16, 18, 19, 0.75),
                    -5px -3px 30px -10px rgba(150, 190, 231, 0.75)
                  `,
                  }}
                >
                  <MdArrowForward className="h-6 w-6 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </button>
              </div>
            </div>
          </div>

          <div
            className="flex gap-6 items-center overflow-hidden p-6"
            ref={scrollRef}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="w-[calc(33%-12px)] aspect-square flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="rounded-2xl w-full h-full object-cover 
                         filter grayscale opacity-50 
                         hover:filter-none hover:opacity-100 
                         hover:scale-105 hover:-rotate-2 
                         transition-all duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-full max-w-xl h-1 bg-gradient-to-r from-[#2828281A] via-[#F8F8F81A] to-[#FFFFFF0D] rounded-full shadow-md shadow-[#00000054]"></div>
      </div>{" "}
    </div>
  );
}
