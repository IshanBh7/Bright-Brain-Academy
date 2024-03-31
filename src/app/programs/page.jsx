import Programs from "@/components/sections/Programs";
import { programs } from "../../utils";
import Image from "next/image";
import Link from "next/link";
export default function Program() {
  return (
    <div>
      <div className="bg-[url('../../public/images/carousel-1.jpg')] bg-cover bg-center text-white">
        <div className="bg-[url('../../public/images/bg-header-top.png')] h-[10px]"></div>
        <h1 className="text-3xl md:text-5xl font-semibold pt-20 pb-10 pl-10 md:pl-24">
          Programs
        </h1>
        <div>
          <h3 className="text-xl md:text-xl pb-24 pl-10 md:pl-24">
            <Link className="text-orange" href="/">
              Home
            </Link>{" "}
            / <Link href="/programs">Programs</Link>
          </h3>
        </div>
        <div className="bg-[url('../../public/images/bg-header-bottom.png')]  h-[18px]"></div>
      </div>
      <Programs/>
    </div>
  );
}
