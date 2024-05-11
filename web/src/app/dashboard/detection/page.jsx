"use client";
import React from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Detection = () => {
  const { data: session } = useSession();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch("/api/save")
      .then((res) => res.json())
      .then((res) => {
        setData(res.msg);
        console.log(res.msg);
      });
  }, []);
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
              <th className="p-3">Last Seen</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((item, index) => (
                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3">
                    <p>{item.id}</p>
                  </td>
                  <td className="p-3">
                    <p>Intruder</p>
                  </td>
                  <td className="p-3">
                    <img className="h-[50px] w-[50px] " src={item.url} alt="" />
                  </td>

                  <td className="p-3">
                    <p>{item.created_at
                     ? item.created_at : "01 Feb 2022"}</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Detection;
