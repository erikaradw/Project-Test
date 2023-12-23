"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { debounce } from "./utilities";

export function Navbar() {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive((prev) => !prev);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  const navbarStyles = {
    position: "fixed",
    height: "15vh",
    width: "100%",
    backgroundColor: visible ? "#F0723E" : "transparent",
    textAlign: "center",
    transition: "top 0.6s ease",
  };
  return (
    <>
      <div
        style={{ ...navbarStyles, top: visible ? "0" : "-120px" }}
        className="z-[110]">
        <div className="relative top-[50%] flex h-full translate-y-[-50%] flex-row items-center justify-between px-5 shadow-md ">
          <Link href="/">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt=""
              className="my-auto block lg:hidden"
            />
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt=""
              className="my-auto hidden lg:block"
            />
          </Link>
          <div className="relative z-40 hidden flex-row items-center justify-center gap-x-5 text-xl text-white lg:flex lg:pr-20">
            <Link href="/">
              <p className="hover:cursor-pointer hover:font-bold">Work</p>
            </Link>
            <div className="group relative z-50 text-sm">
              <button className=" font-poppins text-xl text-white hover:font-bold">
                <span>About</span>
              </button>
              
            </div>
            <div className="group relative z-50 text-sm">
              <button className=" font-poppins text-xl text-white hover:font-bold">
                <span>Services</span>
              </button>
              
            </div>
            <div className="group relative z-50 text-sm">
              <button className=" font-poppins text-xl text-white hover:font-bold">
                <span>Ideas</span>
              </button>
              <div className="absolute z-50 hidden text-start group-hover:block">
                <div className="absolute  z-50 h-screen shadow-lg">
                  
                </div>
              </div>
            </div>
            <div className="group relative z-50 text-sm">
              <button className=" font-poppins text-xl text-white hover:font-bold">
                <span>Careers</span>
              </button>
              <div className="absolute z-50 hidden text-start group-hover:block">
                <div className="absolute  z-50 h-screen shadow-lg">
                  
                </div>
              </div>
            </div>
            <div className="group relative z-50 text-sm">
              <button className=" font-poppins text-xl text-white hover:font-bold">
                <span>Contact</span>
              </button>
              <div className="absolute z-50 hidden text-start group-hover:block">
                <div className="absolute  z-50 h-screen shadow-lg">
                  
                </div>
              </div>
            </div>
          </div>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggle}
            className="lg:hidden">
            <rect
              width={active ? "45" : "40"}
              height="5"
              fill="#252644"
              className={
                active
                  ? "translate-x-[10%] translate-y-[0%] rotate-45 duration-300"
                  : "rotate-0 duration-300"
              }
            />
            <rect
              y="16"
              width="40"
              height="5"
              fill="#252644"
              className={
                active
                  ? "translate-x-[100%] duration-300"
                  : "rotate-0 duration-300"
              }
            />
            <rect
              y="32"
              width={active ? "45" : "40"}
              height="5"
              fill="#252644"
              className={
                active
                  ? "translate-x-[-50%] translate-y-[25%] -rotate-45 duration-300"
                  : "rotate-0 duration-300"
              }
            />
          </svg>
        </div>
      </div>

      <div
        className={` fixed z-[110] flex h-screen w-screen flex-col items-start justify-start gap-x-5 gap-y-1 overflow-y-hidden bg-primary pt-24 text-xl text-white duration-1000 lg:hidden ${
          active ? "max-w-[75vw]" : "max-w-0"
        } ${visible ? "" : "translate-x-[-200%]"}`}>
        <Link href="/">
          <button className=" pb-5 pl-20 font-poppins text-xl text-white hover:cursor-pointer xs:pl-28 sm:pl-36 md:pl-44">
            <span>Work</span>
          </button>
        </Link>
        <div className="group relative">
          <button className=" pb-5 pl-20 font-poppins text-xl text-white xs:pl-28 sm:pl-36 md:pl-44">
            <span>About</span>
          </button>
          
          </div>
        </div>
        <div className="group relative">
          <button className=" whitespace-nowrap pb-5 pl-20 font-poppins text-xl text-white xs:pl-28 sm:pl-36 md:pl-44">
            <span>Services</span>
          </button>
          
        </div>
        <div className="group relative">
          <button className=" whitespace-nowrap pb-5 pl-20 font-poppins text-xl text-white xs:pl-28 sm:pl-36 md:pl-44">
            <span>Ideas</span>
          </button>
          <div className="z-10 hidden w-screen group-hover:block">
            <div className="relative z-50 h-full w-full bg-primary shadow-lg">
              <div className="relative z-50 flex flex-col gap-y-2 py-5 pl-20 xs:pl-28 sm:pl-36 md:pl-44">
                
              </div>
            </div>
          </div>
        </div>
        <div className="group relative">
          <button className="whitespace-nowrap pb-5 pl-20 text-start font-poppins text-xl text-white xs:pl-28 sm:pl-36 md:pl-44">
            <span>Careers</span>
          </button>
          
        </div>
        <div className="group relative">
          <button className=" pb-5 pl-20 font-poppins text-xl text-white xs:pl-28 sm:pl-36 md:pl-44">
            <span>About</span>
          </button>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
