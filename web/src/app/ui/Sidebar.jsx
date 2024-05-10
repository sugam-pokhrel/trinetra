"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Camera,
  ShieldQuestion,
  LogOut,
  Home,
  HelpCircle,
} from "lucide-react";
import RightArrow from "../../../public/rightArrow.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navlinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    navlink: "/dashboard",
  },
  {
    name: "Detection",
    icon: ShieldQuestion,
    navlink: "/dashboard/detection",
  },
  {
    name: "Camera",
    icon: Camera,
    navlink: "/dashboard/camera",
  },
  {
    name: "Help",
    icon: HelpCircle,
    navlink: "/dashboard/help",
  },
];

const variants = {
  expanded: { width: "20%" },
  notExpanded: { width: "5%" },
};

const Sidebar = ({}) => {
  const [activeNavlink, setActiveNavlink] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "notExpanded"}
      variants={variants}
      className={`py-12 flex flex-col border-r-2 max-w-1/5 h-screen relative ${
        isExpanded ? "px-10" : "px-2 items-center"
      }`}
    >
      <Link href="/">
        <div className="logo flex items-center space-x-2 text-3xl">
          <span className="font-extrabold">T</span>
          <span className={`  ${isExpanded ? "block" : "hidden"}`}>
            {" "}
            TriNetra
          </span>
        </div>
      </Link>

      <div
        className="w-5 h-5 rounded-full bg-black absolute -right-[10.5px] top-14 text-white flex justify-center items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Image
          src={RightArrow}
          className={`${
            isExpanded ? "transform rotate-180 mr-[2px]" : "ml-[2px]"
          }`}
        />
      </div>

      <div className="mt-10 flex flex-col space-y-4">
        <div className="space-y-4 mb-8">
          {navlinks.map((item, index) => (
            <div
              key={index}
              className={`p-2 rounded ${
                activeNavlink === index
                  ? "bg-black text-white font-semibold"
                  : ""
              }`}
              onClick={() => setActiveNavlink(index)}
            >
              <Link href={item.navlink}>
                <div
                  className={`flex space-x-3 ${
                    isExpanded ? "" : "justify-center"
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span
                    className={`cursor-pointer ${
                      isExpanded ? "block" : "hidden"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <Link href="/">
          <button className="p-2 w-full bg-blue-400  rounded text-white font-semibold">
            <div className="flex space-x-3">
              <Home />
              <span
                className={`cursor-pointer ${isExpanded ? "block" : "hidden"}`}
              >
                Home
              </span>
            </div>
          </button>
        </Link>

        <button className="p-2  bg-red-600 rounded text-white font-semibold">
          <div className="flex space-x-3">
            <LogOut />
            <span
              className={`cursor-pointer ${isExpanded ? "block" : "hidden"}`}
            >
              Signout
            </span>
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
