"use client";

import React, { useState, useEffect } from "react";
import DigialWatch from "../components/Date/Date";
import Loading from "../ui/Loading";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer); // cleanup on component unmount
  }, []);

  return (
    <div className="px-[50px] pt-14 flex flex-col justify-center items-center 2 gap-5">
      <div className="flex justify-between w-full">
        <h1 className="text-black text-3xl font-extrabold m">
          Live detection player
        </h1>
        <DigialWatch />
      </div>

      <div>
        {isLoading && (
          <div>
            <Loading />
          </div>
        )}
        <iframe
          src="http://127.0.0.1:5000/video_feed"
          width="500px"
          height="375px"
          className="rounded-md shadow-lg"
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
