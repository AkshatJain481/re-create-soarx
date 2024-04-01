"use client";
import { instructorsDsa } from "@/constants/dsa";
import { useMotionValue, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Instructor {
  onDragStart: () => void;
  onDragEnd: () => void;
  isDragging: boolean;
  dragX: MotionValue<number>;
  instructorIndex: number;
  setInstructorIndex: React.Dispatch<React.SetStateAction<number>>;
}

const InstructorDLc = ({
  onDragStart,
  onDragEnd,
  isDragging,
  dragX,
  instructorIndex,
}: Instructor) => {
  // TODO AUTO INTERVAL IF SOARX WANT

  return (
    <article className="py-8  relative overflow-x-hidden ">
      <motion.div
        className=" active:cursor-grabbing flex items-center"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{
          x: dragX,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        animate={{
          translateX: `-${instructorIndex * 100}%`,
        }}
        transition={{ type: "spring" }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {instructorsDsa.map((instructor) => {
          return (
            <motion.div
              key={instructor.title}
              className="  w-full shrink-0  gap-6 space-y-6"
            >
              <h3 className="text-2xl font-semibold">{instructor.title}</h3>
              <div className="flex items-center justify-evenly gap-2">
                {/* {instructor.logos.map((logo) => (
                  <Image
                    key={logo}
                    src={logo}
                    alt="Instructor"
                    width={102}
                    height={102}
                    className="rounded-xl"
                  />
                ))} */}
              </div>
              <div className="space-y-4">
                <p>{instructor.description}</p>
                <p>{instructor.subDescription}</p>
              </div>
              <Image
                src={instructor.image}
                alt="Instructor"
                width={312}
                height={312}
                className="rounded-xl mx-auto"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </article>
  );
};

export default InstructorDLc;