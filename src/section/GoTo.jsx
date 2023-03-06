import React from "react";
import Image from "next/image";

 function GotTo() {
  return (
    <>
      {/* section with 8 grids */}
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
                <div className="card">
                  <div className="border pb-10 border-gray-200 bg-white px-5 py-3 space-y-3">
                    <p
                      className={`text-[1.25rem] font-bold hover:text-red-500 cursor-pointer`}
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
