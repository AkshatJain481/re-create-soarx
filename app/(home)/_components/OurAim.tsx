import Image from "next/image";
import React from "react";

const OurAim = () => {
  const data = [
    {
      title: "Student Empowerment",
      desc: "Through a variety of initiatives, events, and programs, we strive to empower students to take control of their futures, and unlock their potential",
      image: "/images/empowerment.png",
    },
    {
      title: "Skill Development",
      desc: " At SoarX, we are dedicated to facilitating skill development among students through workshops, training sessions, and hands-on experiences.",
      image: "/images/competence.png",
    },
    {
      title: "Promote Innovation",
      desc: "One of our key aims at SoarX is to promote innovation   among students through hackathons, innovation challenges, and entrepreneurial initiatives.",
      image: "/images/logical-thinking.png",
    },
    {
      title: "Drive Social Impact",
      desc: " Social impact is at the heart of our mission at SoarX. We aim to empower students to drive positive change in their communities and beyond.",
      image: "/images/save-the-world.png",
    },
  ];
  return (
    <div>
      <section className="pt-20 ">
        <div className="container">
          <div id="features">
            <div className="max-w-7xl mx-auto">
              <div className="md:w-2/3 lg:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="my-8 text-2xl  leading-relaxed font-bold text-textColor  md:text-4xl">
                  Rise Together, Soar Higher
                  {/* <br />
                  <span className="text-primary">SoarX</span> */}
                </h2>
                <p className="text-gray-600 ">
                  At Kailasys, we firmly believe that collaboration is the key
                  to success in today&apos;s fast-paced digital landscape.
                  Through strategic IT partnerships, we leverage the collective
                  expertise and resources of industry leaders to deliver
                  innovative solutions that drive tangible results for our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="custom-container">
          <div className="mt-16 grid divide-x divide-y divide-gray-100  overflow-hidden rounded-3xl border border-gray-100 text-gray-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            {data?.map((e, index) => (
              <div
                key={index}
                className={`group cursor-pointer relative ${
                  index === 3 ? "bg-gray-50" : "bg-white"
                }  ${
                  index === 3 ? "hover:bg-white" : ""
                } transition hover:z-[1]  hover:shadow-2xl hover:text-[#10317E] hover:shadow-gray-600/10`}
              >
                <div className="relative space-y-8 py-12 p-8">
                  <Image
                    src={e?.image}
                    alt=""
                    sizes="100vw"
                    className="w-12"
                    width={512}
                    height={512}
                  />
                  <div className="space-y-2">
                    <h5 className="text-lg font-semibold text-gray-700   transition group-hover:text-[#10317E]">
                      {e?.title}
                    </h5>
                    <p className="text-gray-600 text-sm">{e?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurAim;
