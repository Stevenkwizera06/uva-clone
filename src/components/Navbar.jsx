import Image from "next/image";
import logo from "/public/logo.svg";
import logoMd from "/public/logo-md.svg";
import logoSm from "/public/logo-sm.svg";
import search from "/public/search.svg";
import heart from "/public/heart.svg";
import cross from "/public/cross.svg";
import right from "/public/red-right.svg";
import nl from "/public/nl.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuItem from "../components/layout/NavbarMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const data = [
    "Education",
    "Research",
    "News & Events",
    "About the UvA",
    "Library",
  ];
  const nav = [
    {
      text: "Education",
      link: "/education",
      links: [
        "Bachelors",
        "Masters",
        "Professional development",
        "Summer School",
        "Open programmes",
        "Exchange",
      ],
    },
    {
      text: "Research",
      link: "/research",
      links: ["Research at the UvA", "PhD"],
    },
    {
      text: "News & Events",
      link: "/news",
      links: [
        "News",
        "Events",
        "Press Office",
        "Coronavirus information",
        "Ukraine information and support",
      ],
    },
    {
      text: "About the UvA",
      link: "/about",
      links: [
        "About the University",
        "Alumni",
        "Contact and locations",
        "Organisation",
        "Policy and regulations",
        "Working at the UvA",
      ],
    },
    { text: "Library", link: "/library", links: [] },
  ];
  const mobData = ["Education", "Research", "News & Events", "About the UvA"];
  const data1 = [
    {
      text: "Bachelor's",
      link: "/education",
    },
    {
      text: "Master's",
      link: "/education",
    },
    {
      text: "Professional development",
      link: "/education",
    },
    {
      text: "Summer school",
      link: "/education",
    },
    {
      text: "Open programmes",
      link: "/",
    },
    {
      text: "Exchange",
      link: "/",
    },
  ];
  useEffect(() => {
    const handleScrolled = () => {
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
    };
    document.addEventListener("scroll", handleScrolled);
    return () => document.removeEventListener("scroll", handleScrolled);
  }, []);

  return (
    <section className="fixed top-0 inset-x-0 z-50 bg-white">
      <div
        className={`h-[70px] ${
          !scrolled && "sm:h-[84px]"
        } duration-200 bg-white shadow-nav z-20 relative`}
      >
        <div
          className={`flex h-[70px] ${
            !scrolled && "sm:h-[84px]"
          } justify-between items-center`}
        >
          <div className="lg:flex-1">
            {!scrolled && (
              <Image src={logo} className="sm:hidden lg:block" alt="" />
            )}
            {!scrolled && (
              <Image
                src={logoMd}
                className="hidden sm:block lg:hidden h-[38px]"
                alt=""
              />
            )}
            {scrolled && (
              <Image
                src={logoSm}
                className={`${
                  scrolled ? "block" : "sm:hidden"
                }  h-[52px] w-[34px] translate-y-1`}
                alt=""
              />
            )}
          </div>
          <div className="flex h-[42px] gap-x-3 items-center flex-1 flex-row-reverse lg:flex-row lg:justify-end">
            <Link
              href={"/"}
              className="flex items-center gap-[5px] px-2 order-3 lg:order-[initial]"
            >
              <span className="sm:hidden   font-semibold leading-[16px] whitespace-nowrap w-max">
                Compare programmes
              </span>
              <Image src={heart} alt="" />
            </Link>
            <form
              action=""
              className="flex order-2 lg:order-[initial] h-full rounded-[2px] items-center   text-base w-fit lg:flex-1 max-w-[400px] py-2 border border-txt lg:border-[#d6d6d6]"
            >
              <input
                type="text"
                className="sm:hidden  indent-2 flex-1 h-full outline-none text-txt placeholder:text-txt placeholder:text-opacity-75"
                placeholder="Search..."
              />
              <div className="w-10  h-[30px] flex items-center justify-center lg:border-l lg:border-l-[#D6D6D6]">
                <Image src={search} className="" alt="" />
              </div>
            </form>

            <Link
              href={"/"}
              className="flex h-full aspect-square items-center justify-center border border-[#1F1D21] rounded-sm order-1 lg:order-[initial]"
            >
              <Image src={nl} alt="" className="" />
            </Link>

            <button
              className="bg-[#1f1d20]  hover:bg-opacity-80 py-2 h-full  -sm:h-auto flex items-center sm:pl-3 sm:pr-1 rounded-[2px] text-white shadow-[5px]  font-bold"
              onClick={() => setOpen(!open)}
            >
              <span className="hidden ">Menu</span>
              {open && <Image src={cross} className="ml-3.5" alt="" />}
              {!open && (
                <div className="flex flex-col gap-1 px-2 h-full sm:h-auto justify-center items-center">
                  <div className="h-[1.5px] bg-white w-[24px]"></div>
                  <div className="h-[1.5px] bg-white w-[24px]"></div>
                  <div className="h-[1.5px] bg-white w-[24px]"></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden  shadow-nav bg-[#F5F5F5] ${
          scrolled && "absolute left-0 right-0 -top-[54px]"
        } duration-500 transition-all`}
      >
        <div className={`flex h-[54px]`}>
          {nav.map((el, i) => {
            return (
              <div key={i} className="relative group">
                <div className="pt-3 peer pb-2 mr-6 xl:mr-12 text-txt text-xl leading-[32px] hover:cursor-pointer hover:text-[#bd0032] hover:border-b-2 hover:border-b-red">
                  {el.text}
                </div>
                {!!el.links.length && (
                  <div className="bg-[#F5F5F5] px-5 pt-3 pb-4 absolute z-20 bottom-0 translate-y-full -translate-x-5 shadow-hovering w-[300px] hidden group-hover:flex  duration-150 delay-150 flex-col">
                    {el.links.map((item, i) => {
                      return (
                        <Link
                          key={i}
                          className="my-1.5 hover:underline hover:text-red underline-offset-[3px]"
                          href={el.link}
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {open && (
        <div className="absolute bottom-0 translate-y-full inset-x-0 bg-[#d6d6d6] flex flex-col ">
          <div className="flex border-b border-b-white">
            <div className="w-10 h-10"></div>
            <div className=" py-[5px] pr-4 text-[14px] leading-[28px]">
              <span className="text-red flex gap-0.5 items-center ">
                <Image
                  src={right}
                  className="w-4 h-[18px] -translate-y-[1.2px]"
                  alt=""
                />{" "}
                Home
              </span>
            </div>
          </div>
          {nav.map(
            (el, i) =>
              i !== nav.length - 1 && (
                <MenuItem
                  title={el.text}
                  links={el.links}
                  href={el.link}
                  key={i}
                />
              )
          )}
          <div className="flex border-b border-b-white">
            <div className="w-10 h-10 border-r border-r-white"></div>
            <div className=" py-[5px] px-4 text-[14px] leading-[28px]">
              <Link
                href="/library"
                className="text-txt flex gap-0.5 items-center  hover:underline underline-offset-2 hover:text-red"
              >
                Library
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
