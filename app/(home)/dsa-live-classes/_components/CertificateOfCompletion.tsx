import Image from "next/image";
import React from "react";

const CertificateOfCompletion = () => {
  return (
    <div className="mt-10 max-w-[800px] ml-8 mr-8 md:max-w-[1200px] lg:max-w-[1600px]">
      <div className="flex items-center justify-around rounded-xl">
        <p className="md:w-2/5 text-4xl font-semibold ">
          Also, Get a Signed Certificate on successful Completion of the Course.
        </p>
        <div className="h-full md:w-2/5">
          <Image
            src="/images/sertificate.jpeg"
            alt="Certificate of Completion"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-xl shadow-2xl shadow-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateOfCompletion;
