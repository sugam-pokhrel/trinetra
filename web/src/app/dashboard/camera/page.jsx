"use client";
import React from "react";
import Link from "next/link";

const Camera = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/save", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.msg);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen w=full bg-gray-100 gap-10 pt-14">
      <h1 className="mb-4 text-2xl font-bold text-gray-700">Images Page</h1>
      <p className="mb-4 text-center text-gray-600">
        Welcome to the Images page. You can navigate to the List or Add pages
        from here.
      </p>
      <div className="space-x-4">
        <Link href="/dashboard/camera/list">
          <span className="px-4 py-2 font-semibold text-white bg-black rounded hover:bg-blue-700">
            Go to List
          </span>
        </Link>
        <Link href="/dashboard/camera/add">
          <span className="px-4 py-2 font-semibold text-white bg-black rounded hover:bg-green-700">
            Go to Add
          </span>
        </Link>
      </div>
      <footer className="mt-auto"></footer>
    </div>
  );
};

export default Camera;
