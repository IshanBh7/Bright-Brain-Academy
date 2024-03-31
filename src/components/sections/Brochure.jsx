import Image from "next/image";
import program1 from "../../../public/images/image.jpg";
import boy1 from "../../../public/images/brochureSection/boy1.png";
import room from "../../../public/images/brochureSection/3d.png";
import group from "../../../public/images/brochureSection/group1.jpg";

export default function Brochure() {
  return (
    <div className="flex">
      <div className="h-[350px] text-center md:text-left md:h-[450px] bg-orange w-full relative flex justify-between">
        <div className="absolute md:static left-4 w-16 md:w-32 lg:w-40 mt-48 lg:mt-40 lg:ml-12 bottom-0">
          <Image src={boy1} />
        </div>
        <div className="absolute right-4 md:hidden w-32 md:w-32 lg:w-40 mt-48 lg:mt-40 lg:ml-12 bottom-0">
          <Image src={group} />
        </div>
        <div className="lg:-ml-4 mx-auto lg:mx-0 mt-12 md:mt-20 lg:p-0">
          <h1 className="text-5xl lg:text-7xl  mb-5 text-white font-semibold">
            DOWNLOAD <br />
            BROCHURE
          </h1>
          <p className="text-black text-base lg:text-lg font-semibold">
            Download our brochure for more info
          </p>
          <div className="bg-blue text-white flex justify-center mx-10 lg:mx-0 py-[10px] lg:py-[15px] w-[150px] mt-10 rounded-full">
          <a
              href="https://drive.google.com/uc?export=download&id=17br-0_Vl4wjhCdg8JzHVioTCR6kDQDBx"
              className="font-medium"
              download="BBA prospectus.pdf"
            >
              Download
            </a>
</div>

        </div>
        <div className="hidden md:block w-72 lg:w-96 mt-10 mr-10 lg:mr-20">
          <Image src={room} />
        </div>
      </div>
    </div>
  );
}
