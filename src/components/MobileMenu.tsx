"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? " rotate-45" : ""
          } origin-left ease-in-out duration-200`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? " -rotate-45" : ""
          } origin-left ease-in-out duration-200`}
        ></div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] flex flex-col items-center justify-center gap-2 font-medium text-lg z-10 bg-white">
          <Link href={"/"}>Home</Link>
          <Link href={"/friends"}>Friends</Link>
          <Link href={"/stories"}>Stories</Link>
          <Link href={"/sign-in"}>Login</Link>
        </div>
      )}
    </div>
  );
}
