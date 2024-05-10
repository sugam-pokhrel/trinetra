"use client";
import Link from "next/link";
import React, { useState } from "react";

const Add = () => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="pt-14 px-8 ">
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link
            href="/dashboard/images/"
            className="text-primary hover:underline"
          >
            Cameras
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Add Camera</span>
        </li>
      </ul>
      <div className="flex flex-col items-center justify-center mt-20">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-80 border-2 border-gray-200 p-8 rounded"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
          <button
            type="submit"
            className="w-full px-6 py-2 text-white bg-black rounded-md hover:bg-gray-400 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
