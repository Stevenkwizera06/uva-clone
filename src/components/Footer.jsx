
import localFont from "@next/font/local";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { BiChevronRight, BiChevronUp, BiChevronDown } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsYoutube, BsPencilSquare } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// const sourceSans = localFont({
//   src: [
//     {
//       path: "../../public/fonts/sourceSansPro-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/sourceSansPro-Semibold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//   ],
//   variable: "--font-sourceSans",
// });

export default function Footer() {
  const [edu, setEdu] = useState(false);
  const [go, setGo] = useState(false);
  const [info, setInfo] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <div
      className={`bg-[#1f1d20] text-white font-normal text-sm leading-[1.375rem]
         mt-16  font-sourceSans`}
    >
      <div className="px-[0.625rem] xl:px-2 mx-auto container max-w-none xl:max-w-[87.5rem]">
        <div className="pt-9 pb-12">
          <Image src={logo} className="w-[19.8125rem] h-[2.1875rem]" />
        </div>
        <div className="flex gap-2 flex-col hidden sm:block">
          <div>
            <div
              className="flex items-start  justify-between  border-t border-[#8f8f8f] pt-4"
              onClick={() => setEdu(!edu)}
            >
              <h3 className="pb-5 font-semibold leading-4">
                Education & research
              </h3>
              {edu ? (
                <BiChevronUp className="" width={20} />
              ) : (
                <BiChevronDown width={20} />
              )}
            </div>
            {edu && (
              <ul className="flex flex-col gap-2">
                {[
                  "Bachelors programmes",
                  "Minors",
                  "Masters programmes",
                  "Professional development",
                  "Exchange",
                  "Summer School",
                  "PhD at UvA",
                  "Research at UvA",
                ].map((item, index) => (
                  <li className="flex gap-1" key={index}>
                    <BiChevronRight className="mt-1" width={20} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <div
              className="flex items-start border-t border-[#8f8f8f] pt-4 justify-between"
              onClick={() => setGo(!go)}
            >
              <h3 className="pb-5 font-semibold leading-4">Go to</h3>
              {go ? <BiChevronUp width={20} /> : <BiChevronDown width={20} />}
            </div>
            {go && (
              <ul className="flex flex-col gap-2">
                {[
                  "Webmail for UvA staff",
                  "Webmail UvA students",
                  "Library",
                  "Canvas",
                  "SIS",
                  "Timetable",
                  "Course Catalogue",
                  "Vacancies",
                  "UvAshopnl Merchandise store",
                ].map((item, index) => (
                  <li className="flex gap-1" key={index}>
                    <BiChevronRight className="mt-1" width={20} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <div
              className="flex items-start border-t border-[#8f8f8f] pt-4 justify-between"
              onClick={() => setInfo(!info)}
            >
              <h3 className="pb-5 font-semibold leading-4">Information for</h3>
              {info ? <BiChevronUp width={20} /> : <BiChevronDown width={20} />}
            </div>
            {info && (
              <ul className="flex flex-col gap-2">
                {[
                  "Prospective students",
                  "Current students",
                  "Staff",
                  "Journalists",
                  "Alumni",
                  "Donors",
                  "Employers",
                  "External suppliers",
                ].map((item, index) => (
                  <li className="flex gap-1" key={index}>
                    <BiChevronRight className="mt-1" width={20} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <div
              className="flex items-start border-t border-[#8f8f8f] pt-4 justify-between"
              onClick={() => setContact(!contact)}
            >
              <h3 className="pb-5 font-semibold leading-4">Contact</h3>
              {contact ? (
                <BiChevronUp width={20} />
              ) : (
                <BiChevronDown width={20} />
              )}
            </div>
            {contact && (
              <ul className="flex flex-col gap-2">
                {[
                  "Contact information",
                  "Locations",
                  "Contact Student Services",
                  "The UvA and social media",
                ].map((item, index) => (
                  <li className="flex gap-1" key={index}>
                    <BiChevronRight className="mt-1" width={20} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <footer className="bg-[#1F1D20] md:px-3 sm:hidden pt-8 pb-14 border-b border-[#d6d6d6]">
          <div className="max-w-[87.5rem] mx-auto ">
            <div className="">
              {/* <Image
                src="/svgs/footer.svg"
                className=''
                alt="Picture of the author"
                width={350}
                height={350}
              /> */}
              <img src="/svgs/footer.svg" alt="" />
            </div>
            <div className="grid md:grid-cols-1 mt-12 grid-cols-4 text-white gap-6">
              {[
                {
                  title: "Education research",
                  link: [
                    "Bachelor's programmes",
                    "minors",
                    "master's programmes",
                    "professionaldevelopment",
                    "exchange",
                    "summerschool",
                    "phdatuva",
                    "researchatuva",
                  ],
                },
                {
                  title: "Go to",
                  link: [
                    "webmailforuvastaff",
                    "webmailuvastudents",
                    "library",
                    "canvas",
                    "sis",
                    "timetable",
                    "coursecatalogue",
                    "vacancies",
                    "uvashopnlmerchandisestore",
                  ],
                },
                {
                  title: "Information for",
                  link: [
                    "prospectivestudents",
                    "currentstudents",
                    "staff",
                    "journalists",
                    "alumni",
                    "donors",
                    "employers",
                    "externalsuppliers",
                  ],
                },
                {
                  title: "Contact",
                  link: [
                    "contactinformation",
                    "locations",
                    "contactstudentservices",
                    "theuvaandsocialmedia",
                  ],
                },
              ].map((value, el) => {
                return (
                  <div className="card" key={el}>
                    <div className="">
                      <p className={`text-md tracking-wide font-semibold`}>
                        {value.title}
                      </p>
                      <div className="mt-5 space-y-2">
                        {value.link.map((e, idx) => {
                          return (
                            <div key={idx} className="flex items-center">
                              <MdOutlineKeyboardArrowRight className="text-white text-lg" />
                              <p className="text-[0.86rem] tracking-wide">
                                {e}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </footer>
      </div>
      <section className="py-6 bg-[#1F1D20] md:px-3">
        <div className="max-w-[87.5rem] mx-auto md:flex-col flex justify-between ">
          <div className="flex  gap-3 text-[#d6d6d6]">
            {[
              { title: "Copyright UVA 2023", link: "copyright" },
              { title: "About this site", link: "about" },
              { title: "Privacy", link: "privacy" },
              { title: "Cookie settings", link: "cookie" },
            ].map((item, index) => {
              return (
                <p key={index} className="text-[0.78rem]">
                  {item.title}
                </p>
              );
            })}
          </div>
          <div className="flex text-[#d6d6d6] md:flex-col items-center">
            <div>
              <p className="text-[0.78rem]">Follow UVA on social media</p>
            </div>
            <div className="flex items-center space-x-2">
              {[
                <GrFacebookOption className="text-2xl text-white" />,
                <FaLinkedinIn className="text-2xl text-white" />,
                <FaTwitter className="text-2xl text-white" />,
                <AiOutlineWhatsApp className="text-2xl text-white" />,
                <FaInstagram className="text-2xl text-white" />,
                <BsYoutube className="text-2xl text-white" />,
              ].map((value, index) => {
                return (
                  <div className="hover:bg-[#4a4a4a]  rounded-full">
                    {value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
