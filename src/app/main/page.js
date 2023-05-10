"use client";

import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiGooglescholar,
  SiMongodb,
  SiFastapi,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiDaisyui,
  SiSvg,
  SiBootstrap,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import bdr2 from "/public/bdr2.png";
import { useState } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-10 dark:bg-black">
        <section className="min-h-screen">
          <nav className="py-8 mb-12 flex justify-between items-center">
            <h1 className="text-xl font-mono"></h1>
            <ul className="flex items-center">
              <li>
                {" "}
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" text-gray-600 cursor-pointer text-2xl dark:text-gray-200"
                />
              </li>
              <li className="bg-gray-600 px-4 py-2 rounded-full ml-8 text-sm text-gray-200 dark:bg-gray-200 dark:text-black">
                resume
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-myblue-50 font-medium">
              Brian Rabern
            </h2>
            <h3 className="text-2xl py-2  dark:text-white">
              <code className="h-10 flex items-center justify-center">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      // .typeString("philosopher")
                      // .pauseFor(1000)
                      // .deleteAll()
                      // .typeString("logician")
                      // .pauseFor(1000)
                      // .deleteAll()

                      .typeString("01110011 01101111")

                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("software engineer")

                      .start();
                  }}
                />
              </code>
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-500">
              With ten years of experience as a philosophy and logic professor
              using formal methods to model meaning and human communication, I’m
              now applying my skills to the technology sector. I bring a unique
              perspective to the development process where I create products
              that are not only functional but also deeply meaningful to users.
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillGitlab />
            <AiFillLinkedin />
            <SiGooglescholar />
            <AiFillTwitterCircle />
          </div>
          <div className="mx-auto flex items-center relative bg-gradient-to-b from-gray-400 rounded-full w-56 h-40 mt-10 mb-10 overflow-hidden">
            <Image src={bdr2} alt="Brian Rabern" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">projects</h3>

            <p className="text-md py-2 leading-8 text-gray-600">
              Below are some of the projects I've worked on recently.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10 bg-gray-600 dark:bg-gray-800 flex-1">
              <h3 className="text-gray-400 text-2xl font-medium pb-5">
                MunroGo
              </h3>
              <iframe
                src="https://www.youtube.com/embed/WH_QtAKQunQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-80"
              ></iframe>

              <p className="py-2 text-gray-400 mt-3">
                A mountain-climbing app that allows users to log and track
                climbs and statistics using FastAPI and React. [
                <a href="https://gitlab.com/elijahram/munro-go">code</a>] [
                <a href="https://elijahram.gitlab.io/munro-go">live</a>]
              </p>
              <div className="justify-end items-center text-2xl flex space-x-4 text-gray-400 flex-wrap mt-3">
                <SiPython />
                <SiJavascript />
                <SiMongodb />
                <SiFastapi />
                <SiReact />
                <SiRedux />
                <SiTailwindcss />
                <SiDaisyui />
              </div>
            </div>
            <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10  bg-gray-600 dark:bg-gray-800 flex-1">
              <h3 className="text-gray-400 text-2xl font-medium pb-5">
                vennPlayground
              </h3>
              <iframe
                src="https://youtube.com/embed/WQIxw2IvQTI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-80"
              ></iframe>

              <p className="py-2 text-gray-400 mt-3">
                An interface for generating and semantically evaluating Venn
                Diagrams utilizing React components and SVG technology. [
                <a href="https://github.com/brianrabern/vennPlayground">code</a>
                ] [
                <a href="https://brianrabern.github.io/vennPlayground/">live</a>
                ]
              </p>
              <div className="justify-end items-center text-2xl flex space-x-4 text-gray-400 flex-wrap mt-3">
                <SiSvg />
                <SiJavascript />
                <SiHtml5 />
                <FaCss3 />
                <SiBootstrap />
                <SiReact />
              </div>
            </div>
            <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10  bg-gray-600 dark:bg-gray-800 flex-1">
              <h3 className="text-gray-400 text-2xl font-medium pb-5">
                Hofstadter's MU Playground
              </h3>
              <iframe
                src="https://youtube.com/embed/bu6oVyBziM0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-80"
              ></iframe>

              <p className="py-2 text-gray-400 mt-3">
                A user-friendly interface implementing the logic for
                Hofstadter’s proof system employing React components. [
                <a href="https://github.com/brianrabern/vennPlayground">code</a>
                ] [
                <a href="https://brianrabern.github.io/vennPlayground/">live</a>
                ]
              </p>
              <div className="justify-end items-center text-2xl flex space-x-4 text-gray-400 flex-wrap mt-3">
                <SiReact />
                <SiJavascript />
                <SiHtml5 />
                <FaCss3 />
              </div>
            </div>
            <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10  bg-gray-600 dark:bg-gray-800 flex-1">
              <h3 className="text-gray-400 text-2xl font-medium pb-5">
                Elogic
              </h3>
              <iframe
                src="https://youtube.com/embed/vuYXTmYnnaw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-80"
              ></iframe>

              <p className="py-2 text-gray-400 mt-3">
                A web-based application for teaching the syntax and semantics of
                first-order logic, with multiple exercise environments including
                a symbolisation interface, a model evaluator, and a natural
                deduction environment for constructing proofs. [
                <a href="https://info.elogic.land/">info</a>]
              </p>
              <div className="justify-end items-center text-2xl flex space-x-4 text-gray-400 flex-wrap mt-3">
                <SiTypescript />
                <SiReact />
                <SiTailwindcss />
                <SiFirebase />
              </div>
            </div>
          </div>
        </section>
        <section className="py-10"></section>
      </main>
    </div>
  );
}
