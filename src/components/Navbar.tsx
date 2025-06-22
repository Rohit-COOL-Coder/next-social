"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
export default function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block font-bold text-xl text-blue-600 w-[20%]">
        Facebook
      </div>
      {/*  CENTER */}
      <div className="hidden md:flex gap-5 text-gray-600 w-[50%]">
        <Link href={"/"} className="flex justify-center items-center gap-2">
          <Image src="/home.png" alt="homepage icon" width={10} height={10} />
          Homepage
        </Link>
        <Link
          href={"/profile"}
          className="flex justify-center items-center gap-2"
        >
          <Image src="/home.png" alt="homepage icon" width={10} height={10} />
          Friends
        </Link>
        <Link
          href={"/stories"}
          className="flex justify-center items-center gap-2"
        >
          <Image src="/home.png" alt="homepage icon" width={10} height={10} />
          Stories
        </Link>
      </div>
      {/*  RIGHT */}
      <div className="w-[30%] flex justify-end items-center gap-4 lg:gap-8">
        <ClerkLoading>
          <p>Loading...</p>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image
                src={"/people.png"}
                alt="notification-icon"
                width={15}
                height={15}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src={"/messages.png"}
                alt="notification-icon"
                width={15}
                height={15}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src={"/notifications.png"}
                alt="notification-icon"
                width={15}
                height={15}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex gap-2 items-center justify-center">
              <Image
                src={"/people.png"}
                alt="signin-icon"
                width={15}
                height={15}
              />
              <Link href={"/sign-in"}>SignIn/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
}
