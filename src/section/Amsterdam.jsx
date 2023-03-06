import React from "react";
import Image from "next/image";


function Amsterdam() {
  return (
    <section className="md:px-3">
      <div className="max-w-6xl mx-auto grid  grid-cols-2 py-12  md:grid-cols-1 ">
        <div className="pt-24 space-y-5">
          <h1 className={`text-4xl  font-semibold`}>University of Amsterdam</h1>
          <p className={`text-2xl`}>Inspiring generations since 1632.</p>
        </div>
        <div className="mt-7">
          <img
            className="w-full object-cover h-[31.25rem] md:h-auto object-center aspect-[11 / 15]"
            src="https://www.uva.nl/webfiles/1676992405662/includes/home-herobanner-en/img/Universiteit+van+Amsterdam+shoot+17012023-0176-flip-cropped-hi.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Amsterdam;
