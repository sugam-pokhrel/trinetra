"use client";
import Link from "next/link";
import React from "react";

import { useEffect } from "react";
const List = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/save", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.msg);
        setData(data.msg);
      });
  }, []);

  return (
    <div className="pt-14 px-8 ">
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link
            href="/dashboard/camera/"
            className="text-primary hover:underline"
          >
            Cameras
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Camera list</span>
        </li>
      </ul>

      <div className="container p-4 dark:text-gray-800 text-[20px]">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Lists</h2>
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
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((item, index) => (
                  <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>{index + 1}</p>
                    </td>
                    <td className="p-3">
                      <p>{item.name}</p>
                    </td>
                    <td className="p-3">
                      <img
                        className="h-[50px] w-[50px] "
                        src={item.url}
                        alt=""
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
