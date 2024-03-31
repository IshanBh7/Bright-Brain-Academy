import Image from "next/image";
import { programs } from "../../utils";
export default function Programs() {
  return (
    <div className="my-20">
      <div className="flex flex-col items-center justify-center px-12 md:px-16">
        <h1 className="text-4xl my-5">School Programs</h1>
        <p className="text-light-black text-center text-sm md:text-base w-[100%] lg:w-[70%]">
          Discover our School Programs: Explore our diverse range of classes
          designed to inspire and prepare students for success.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {programs.map((prog, index) => (
            <div key={index}>
              <div className="rounded-full mx-auto w-[240px] h-[240px] flex justify-center items-center bg-orange">
                <Image
                  className="rounded-full object-cover w-[210px] h-[210px]"
                  src={prog.img}
                />
              </div>
              <div className="flex flex-col justify-center items-center pt-12 -mt-14 bg-orange rounded-[10px]">
                <h2 className="text-2xl text-blue font-bold pt-5 ">{prog.title}</h2>
                <p className="pr-5 pl-12 text-blue pt-3 pb-5 ">
                  {prog.blurb}
                </p>
                <div className="grid grid-cols-3 w-[100%] px-5 pb-8 pt-5">
                  <div className=" border-t-3 border-[#f63030] mr-2">
                    <h3 className="text-[#f63030] pt-1 pb-1  font-semibold">
                      Age:
                    </h3>
                    <p className="text-black text-sm">{prog.age}</p>
                  </div>
                  <div className=" border-t-3 border-[#198754] mr-2">
                    <h3 className="pt-1 pb-1 font-semibold text-[#198754]">
                      Time:
                    </h3>
                    <p className="text-black text-sm">{prog.timings}</p>
                  </div>
                  <div className="border-t-3 border-[#593333]">
                    <h3 className="pt-1 pb-1 font-semibold text-[#593333]">
                      Strength:
                    </h3>
                    <p className="text-black text-sm">{prog.size}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
