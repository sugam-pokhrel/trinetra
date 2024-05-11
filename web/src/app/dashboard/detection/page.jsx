"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Detection = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/login");
    return null;
  }
  return (
    <div className="container p-4 pt-14 dark:text-gray-800 text-[20px]">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Detection</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">S.N</th>
              <th className="p-3">Name</th>
              <th className="p-3">Photo</th>
              <th className="p-3">Role</th>
              <th className="p-3">Last Seen</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
              <td className="p-3">
                <p>1</p>
              </td>
              <td className="p-3">
                <p>Yangsing Limbu</p>
              </td>
              <td className="p-3">
                <img
                  className="h-[50px] w-[50px] "
                  src="https://th.bing.com/th/id/OIP.rs6Fm8blvPf-4eUVzC0DdAAAAA?w=350&h=500&rs=1&pid=ImgDetMain"
                  alt=""
                />
              </td>
              <td className="p-3">
                <p>Family</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>

                <p className="dark:text-gray-600">Tuesday</p>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Detection;
