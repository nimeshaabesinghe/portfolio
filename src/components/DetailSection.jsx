"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const DetailSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-4xl lg:text-5xl text-3xl font-extrabold">
            Hello,
            <span className="pl-4 text-transparent bg-clip-text bg-gradient-to-r from-[#c5e5ca] via-[#3f5b52] to-[#b069c0]">
              I'm Nimesha
            </span>
          </h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I am a Full Stack Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "I am a Dedicated Learner",
              1000,
              "I am a Creative Problem Solver",
              1000,
              "I am a Team Player",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              color: "#b069c0",
              transition:
                "color 0.3s ease-in-out, text-shadow 0.3s ease-in-out",
              cursor: "pointer",
              userSelect: "none",
            }}
            repeat={Infinity}
          />
          ;
          <p className="mt-3 text-[#ADB7BE] text-lg lg:text-xl mb-6">
            I’m a full-stack developer who enjoys building web applications that
            solve real-world problems. I have experience working with both
            front-end and back-end technologies to deliver functional,
            user-friendly solutions.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-[#0d4717] via-[#3f5b52] to-[#b069c0] text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent text-slate-200 hover:bg-slate-800 border border-white ">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#534b55] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] relative overflow-hidden">
            <img
              src="/images/my.png"
              alt="my-image"
              width={350}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
