"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Landing() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center ">
      <div className="h-[80vh] w-full my-10 max-w-[90vw] rounded-md text-black flex bg-black px-20 justify-center items-center">
        <div className="flex ">
          <img
            className="min-h-[200px] max-h-[300px] rounded-md object-cover"
            src="https://deeplobe.ai/wp-content/uploads/2022/02/Main-1.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 px-10 text-white ">
          <h1 className="text-4xl font-bold">Welcome to ThirdEye</h1>
          <p className="text-2xl">
            Your Door Face Recognition System Solution!
          </p>
          <p className="text-1xl">
            Join the ThirdEye community today and step into a safer tomorrow!
          </p>
          <button
            className="p-3 px-[15px] bg-gray-300 text-black rounded-md mt-5 hover:bg-gray-400"
            onClick={() => router.push("/login")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
