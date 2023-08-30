"use client";
import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";

type Props = {};

export default function ContactMe({}: Props) {
  const [submited, setSubmited] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // https://docs.google.com/forms/d/e/1FAIpQLSdgmTFHHgjMVlWgggMAVFQh-FacHUVil-Uj21M5NDdYECqXKg/formResponse
  // https://docs.google.com/forms/d/e/1FAIpQLSdgmTFHHgjMVlWgggMAVFQh-FacHUVil-Uj21M5NDdYECqXKg/viewform?usp=pp_url&entry.1578957835=This+is+name&entry.2085755619=This+is+email&entry.1383274427=This+is+subject&entry.1442883947=this+is+message
  // entry.1578957835=This+is+name
  // entry.2085755619=This+is+email
  // entry.1383274427=This+is+subject
  // entry.1442883947=this+is+message

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly max-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <div className=" space-y-4">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-1xl">+917999405125</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-1xl">apoorvjain162@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-1xl">+123 Developer Lane</p>
          </div>
        </div>
        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          className="hidden"
          onLoad={async () => {
            if (submited) {
              setIsSubmitting(false);
              toast.success("Message sent successfully!");

              await new Promise((resolve) => setTimeout(resolve, 1000));
            }
          }}
        ></iframe>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdgmTFHHgjMVlWgggMAVFQh-FacHUVil-Uj21M5NDdYECqXKg/formResponse"
          method="POST"
          target="hidden_iframe"
          onSubmit={() => {
            setIsSubmitting(true);
            setSubmited(true);
          }}
          className=" flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              name="entry.1578957835"
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              name="entry.2085755619"
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            name="entry.1383274427"
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />

          <textarea
            name="entry.1442883947"
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-lg"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                Submitting
                <div className="w-5 h-5 border-2 border-t-2 border-white rounded-full animate-spin"></div>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
