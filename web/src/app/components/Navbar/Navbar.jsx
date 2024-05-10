"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [showDash, setShowDash] = React.useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    if (pathname.includes("dashboard")) {
      setShowDash(false);
    }
  }, [pathname]);

  const handleLoginClick = async () => {
    router.push("/login");
  };
  const handleHomeClick = async () => {
    router.push("/");
  };

  if (!showDash) {
    return null;
  }

  return (
    <div className="px-20 h-[10vh] flex bg-white justify-between text-[20px]  items-center  border-b-2 border-black-300  fixed top-0 w-full z-50">
      <div className="flex items-center">
        <div
          className="logo flex items-center space-x-2"
          onClick={handleHomeClick}
        >
          <span className={`text-3xl font-semibold`}> TriNetra</span>
        </div>
      </div>
      <div className="flex space-x-4 justify-center items-center gap-10">
        <a href="#" className="text-black" onClick={handleHomeClick}>
          Home
        </a>
        <a href="#features" className="text-black">
          Features
        </a>
        {/* <a href="#" className="text-black">
          About
        </a> */}
        <button
          className="p-2 px-[15px] bg-gray-300 rounded-md"
          onClick={handleLoginClick}
        >
          {session ? "Dashboard" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
