import Image from "next/image";


function News() {
  return (
    <>
      {/* section with 4 grids */}
      <section className="bg-[#E6E6E6] pb-20 md:px-3">
        <div className="max-w-[87.5rem] mx-auto ml-3 sm:ml-0">
          <div className="">
            <p className={`text-2xl pt-16 pb-12 font-bold`}>
              News
            </p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-1 gap-6">
            {[
              "https://www.uva.nl/binaries/_ht_1677194284781/cardsmall/content/gallery/onderzoek/iop/nieuws/2023/20230219_teflon-wrijving_imgeng.png",
              "https://www.uva.nl/binaries/_ht_1676632421291/680x190-webp/content/gallery/faculteiten-en-diensten/fmg/fmg-corporate-met-restricties/nieuws/rich-man.jpg",
              "https://www.uva.nl/binaries/_ht_1676282102189/cardsmall/content/gallery/faculteiten-en-diensten/uva-bureau-communicatie/persvoorlichting/2023/honeyforaging_bryndanvanpinxteren.jpg",
              "https://www.uva.nl/binaries/_ht_1540568399864/cardsmall/content/gallery/faculteiten-en-diensten/restyling18-generiek-beeld/_monique-kooijmans-athenaeum-illustre.jpg",
            ].map((value, el) => {
              return (
                <div className="hover:shadow-5xl duration-300">
                  <div>
                    <img
                      className="w-full h-40 object-cover object-center aspect-video"
                      src={value}
                      alt=""
                    />
                  </div>
                  <div className="border pb-20 border-gray-200 bg-white px-5 py-3 space-y-3">
                    <p
                      className={`font-bold text-xl hover:text-red-500 cursor-pointer`}
                    >
                      Forever chemical' PFAS in Dutch drinking water
                    </p>
                    <p>
                      The surface of Teflon - the non-stick coat- ing in your
                      pan - is incredibly slippery. Thanks to research carried
                      out at the Institute of Physics (UvA) and research centre
                      ARCNL, we finally know where this slipperiness ...
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
export default News
