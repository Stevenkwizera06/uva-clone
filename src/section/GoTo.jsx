import React from "react";

 function GotTo() {
  return (
    <>
      
      <section className="bg-white pb-20 md:px-3">
        <div className="max-w-[87.5rem] mx-auto ml-3 sm:ml-0">
          <div className="">
            <p className={`text-2xl pt-16 pb-12 font-bold`}>
              Go To
            </p>
          </div>
          <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
            {[
              { title: "Alumni", link: "alumni" },
              { title: " PhD", link: "uva" },
              { title: "UVA Experts", link: "phd" },
              { title: "UVA Experts", link: "uva" },
              { title: "Staff website", link: "staff" },
              { title: "Student website", link: "student" },
            ].map((value, el) => {
              return (
                <div className="">
                  <div className=" bg-white px-5 py-3 space-y-3 border border-[#e6e6e6] group hover:shadow-3xl cursor-pointer">
                    <p
                      className={`hover:text-red-500 cursor-pointer text-[1.5rem] leading-[1.15rem] font-semibold text-[#1f1d21] group-hover:text-[#bd0032] group-hover:underline group-hover:underline-offset-4 p-4 pb-8`}
                    >
                      {value.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default GotTo
