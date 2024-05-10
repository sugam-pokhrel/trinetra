import React from "react";
import Login from "../components/login/Login";
import Navbar from "../components/Navbar/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[90vh] flex justify-center items-center ">
        <Login />
      </div>
    </>
  );
}

export default page;
