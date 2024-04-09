import Brochure from "@/components/sections/Brochure";
import Link from "next/link";
export default function AdmissionProcess() {
  return (
    <div>
      {/* <div className="bg-[#65B741] text-white flex justify-between items-center px-10 h-16">
        <div className="font-semibold">ADMISSION PROCESS </div>
        <div>
          <Link className="mr-3 hover:text-orange" href="/">
            Home
          </Link>
          |
          <Link className="ml-3 hover:text-orange" href="admission-process">
            Admission Process
          </Link>
        </div>
      </div> */}
      <div className="text-center mt-20 mb-28 px-10 md:px-20">
        <h1 className=" text-4xl lg:text-6xl mb-14 font-semibold">
          ADMISSION PROCESS
        </h1>
        <div>
          <h3 className="text-xl lg:text-2xl mb-5 text-yellow">
            Admission Policy
          </h3>
          <p className="text-sm md:text-base text-light-black">
            Applications for admission are accepted from students of all faith.
            However preference is given on merit basis through admission test. A
            student has to produce grade sheet as proof of his/ her previous
            class. Prospectus along with registration form is available in the
            school office. The form should be duly filled in and submitted in
            the office before the due date.
          </p>
          <p className="text-sm md:text-base text-light-black mt-10">
            A child has also to compete for admission by appearing in a written
            test followed by an interview. Parent Should accompany the child at
            time of interview. The test will cover English, Hindi, Mathematics
            and Science based on the syllabi of the preceding class to which
            admission is sought. The Management reserves all rights of admitting
            children to school and is not bound to give reasons for admission or
            rejection of any particular child.
          </p>
        </div>
      </div>
      <Brochure />
    </div>
  );
}
