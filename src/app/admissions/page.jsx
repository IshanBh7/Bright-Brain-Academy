"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Admission() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_ke52o1p",
        "template_yxngwcp",
        form.current,
        {
          publicKey: "ZEVLaD4fVNeDxicI5",
        }
      );
      toast.success("Email Sent!", {
        position: "top-center",
      });
      form.current.reset();
    } catch (error) {
      console.error("FAILED...", error.text);
    }
  };



  return (
    <div className="bg-orange py-10 flex flex-col items-center justify-center text-center">
      <ToastContainer  />
      <div>
        <h2 className="text-blue text-5xl md:text-6xl my-5 font-semibold">
          APPLY FOR ADMISSION
        </h2>
        <h3 className="text-[#06346a] text-lg md:text-xl font-semibold ">
          Fill the below form
        </h3>
        <h2 className="text-white my-5">
          Make your children's life special by enrolling them <br /> in our
          Bright Brain Academy
        </h2>
      </div>
      <div>
        <form
          className="flex flex-col items-center justify-center text-[#06346a] my-10 font-medium"
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Student Name</label>
          <input
            className="mt-2 mb-4 py-2 px-4 w-60 rounded-md"
            type="text"
            name="student_name"
          />
          <label>Phone Number</label>
          <input
            className="mt-2 w-60 mb-4 px-4 py-2 rounded-md"
            type="number"
            name="student_phone_number"
          />
          <label>Father's / Mother's Name</label>
          <input
            className="mt-2 w-60 mb-4 px-4 py-2 rounded-md"
            type="text"
            name="student_father_name"
          />
          <label>Any Query You Want To Ask?</label>
          <textarea
            className="mt-2 w-60 mb-4 px-4 py-2 rounded-md"
            name="student_query"
          />
          <input
            className="bg-blue mt-5 rounded-md text-white w-60 py-3"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}
