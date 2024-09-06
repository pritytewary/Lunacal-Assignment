"use client";
import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { FaGripVertical } from "react-icons/fa";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("About Me");
  const tabs = ["About Me", "Experiences", "Recommended"];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="flex bg-[#363C43] rounded-3xl py-4 px-2 text-gray-300 shadow-xl shadow-[#00000099]">
        <div className="flex items-center flex-col mr-4 mt-2">
          <GoQuestion
            size={24}
            className="bg-clip-text bg-gradient-to-br from-[#4A4E54] to-[#A3ADBA]"
          />
          <FaGripVertical size={25} className="text-[#4A4E54] mt-20" />
        </div>

        <div className="flex-1">
          <div className="flex bg-black rounded-xl p-1 shadow-inner shadow-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-3 text-sm transition-colors rounded-xl flex-1 ${
                  activeTab === tab
                    ? "bg-gray-800 text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="rounded-2xl p-4 text-base leading-relaxed text-[#969696]">
            <p>
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.
            </p>
            <p className="mt-4">
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4 year old
              twin daughters—Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9-10 AM. This is
              a...
            </p>
          </div>
        </div>

        <div className="absolute right-[10px] top-24">
          <div className="w-2 h-16 rounded-full bg-gradient-to-b from-[#888989] to-[#4A4E54] shadow-[4px_4px_5px_rgba(0,0,0,0.3)]"></div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-full max-w-lg h-1 bg-gradient-to-r from-[#2828281A] via-[#F8F8F81A] to-[#FFFFFF0D] rounded-full shadow-md shadow-[#00000054]"></div>
      </div>{" "}
    </div>
  );
}
