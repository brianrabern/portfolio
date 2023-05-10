"use client";

import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
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
  SiSvg,
  SiBootstrap,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiDjango,
} from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { BsCaretDownSquareFill, BsCaretUpSquareFill } from "react-icons/bs";

const Resume = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isExpandedTech, setIsExpandedTech] = useState(false);
  const [isExpandedLinks, setIsExpandedLinks] = useState(false);

  const handleClick = () => {
    setIsExpandedTech(!isExpandedTech);
  };
  const handleClickLinks = () => {
    setIsExpandedLinks(!isExpandedLinks);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-10 dark:bg-black bg-white">
        <nav className="py-8 mb-12 flex justify-between items-center">
          <h1></h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" text-gray-600 cursor-pointer text-2xl dark:text-gray-200"
              />
            </li>
            <li className="bg-myblue-50 px-4 py-2 rounded-full ml-8 text-sm text-gray-200 dark:bg-gray-200 dark:text-black">
              main
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-3xl py-2 text-myblue-50 font-medium">
            Brian Rabern, PhD
          </h2>
          <div className="shadow-lg p-5 rounded-xl my-5 bg-gray-300 dark:bg-gray-800 flex-1">
            <p className="text-sm text-gray-500 mb-1">Contact</p>
            <code className="px-5 text-gray-700">brian.rabern@gmail.com</code>
            <br />
            <code className="px-5  text-gray-700">
              <a href="https://brianrabern.net">brianrabern.net</a>
            </code>
            <p className="px-5 mt-2 text-gray-700">541-672-4056</p>

            <p className="px-5 text-gray-700">Bend, OR</p>
          </div>

          <div>
            <div className="text-2xl shadow-lg px-4 rounded-xl my-5 bg-yellow-300 text-gray-500 dark:bg-gray-800">
              <p className="text-sm text-myblue-50 py-5">Technical Skills</p>
              <div className="flex space-x-4 py-3 px-5 text-myblue-50">
                <SiPython />
                <SiJavascript />
                <SiFastapi />
                <SiDjango />
                <SiMongodb />
                <SiPostgresql />
                <SiSvg />
                <SiDocker />
              </div>
              <div className="flex space-x-4 py-3 px-5 text-myblue-50">
                <SiReact />
                <SiRedux />
                <SiHtml5 />
                <FaCss3 />
                <SiTailwindcss />
                <SiBootstrap />
                <SiGit />
              </div>
              <button className="justify-end mt-5" onClick={handleClick}>
                {isExpandedTech ? (
                  <BsCaretUpSquareFill className="text-gray-400 bg-yellow-300 text-sm" />
                ) : (
                  <BsCaretDownSquareFill className="text-gray-400 bg-yellow-300 text-sm" />
                )}
              </button>

              {isExpandedTech && (
                <div className="text-lg text-myblue-50 px-10 py-3">
                  <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>FastAPI</li>
                    <li>Django</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>SVG</li>
                    <li>Docker</li>
                    <li>Git</li>
                    <li>React</li>
                    <li>Redux Toolkit</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>LaTeX</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="text-2xl shadow-lg px-4 rounded-xl my-5 bg-myblue-50 text-gray-500 dark:bg-gray-800">
              <p className="text-sm text-yellow-300 py-5">
                Socials and Repositories
              </p>
              <div className="flex space-x-4 py-3 px-5 text-yellow-300">
                <AiFillGithub />
                <AiFillGitlab />
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <SiGooglescholar />
              </div>

              <button className="justify-end mt-5" onClick={handleClickLinks}>
                {isExpandedLinks ? (
                  <BsCaretUpSquareFill className="text-gray-400 bg-myblue-50 text-sm" />
                ) : (
                  <BsCaretDownSquareFill className="text-gray-400 bg-myblue-50 text-sm" />
                )}
              </button>

              {isExpandedLinks && (
                <div className="text-lg text-yellow-300 px-10 py-3">
                  <ul>
                    <li>
                      <a href="https://linkedin.com/in/brian-rabern">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/brianrabern">GitHub</a>
                    </li>

                    <li>
                      {" "}
                      <a href="https://gitlab.com/brianrabern">GitLab</a>
                    </li>

                    <li>
                      {" "}
                      <a href="https://scholar.google.com/citations?user=vzRA2EMAAAAJ&hl=en">
                        GoogleScholar
                      </a>
                    </li>

                    <li>
                      {" "}
                      <a href="https://philpeople.org/profiles/brian-rabern">
                        PhilPapers
                      </a>
                    </li>

                    <li>
                      <a href="https://twitter.com/brian_rabern">Twitter</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="py-5" />

        <section>
          <h2 className="text-xl font-medium ">Professional Experience</h2>

          {/* exper1 */}
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-myblue-50">
                Full Stack Engineer and Co-Founder
              </p>
              <p className=" text-gray-600">Elogic, Ltd.</p>
              <p className="text-gray-600">2020-present</p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li>
                Developed a web application for teaching the syntax and
                semantics of first-order logic, with multiple exercise
                environments including a symbolisation interface, a model
                evaluator, and an interface for constructing proofs.
              </li>
              <li>
                Deployed on Google Cloud Platform interfacing with the Z3
                theorem prover.
              </li>
              <li>
                Licensed for use at major universities including Yale,
                Edinburgh, and Vassar.
              </li>
            </ul>
          </div>

          {/* exper2 */}
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-myblue-50">Professor</p>
              <p className=" text-gray-600">University of Edinburgh</p>
              <p className="text-gray-600">2013-present</p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li>
                Published 30+ articles in top-tier peer reviewed journals.
              </li>
              <li>
                Managed large teaching team for Symbolic Logic with 400+
                students.
              </li>
              <li>
                Received award for Outstanding Innovation in Digital Teaching
                (2020).
              </li>
            </ul>
          </div>
        </section>
        {/* <section>
            <h2>Education</h2>
            <ul>
              <li>
                Hack Reactor, Advanced Software Engineering Certificate.{" "}
                <span className="date">2023</span>
              </li>
              <p>
                Mastered domain-driven web development with JavaScript and
                Python. Constructed full-stack architectures with microservices
                and RESTful APIs.
              </p>
              <li>
                Australian National University, PhD{" "}
                <span className="date">2012</span>
              </li>
              <p>
                Research area: Philosophy of language and logic. Dissertation
                title: The semantics of contextual shifting and sensitivity.
              </p>
            </ul>
          </section>

          <section>
            <h2>Recent Development Experience</h2>
            <ul>
              <li>
                MunroGo | Python, JavaScript, FastAPI, React, Redux, MongoDB,
                Tailwind <span className="date">2023</span>
              </li>
              <p>
                A comprehensive guide to Scotland's 282 Munros that tracks
                climbs and statistics. Leveraged OpenWeather, Wikipedia, and
                GoogleMaps APIs for real-time weather conditions, images, and
                maps. Utilized FastAPI and Redux Toolkit.
              </p>
              <li>
                VennPlayground | JavaScript, React, SVG, HTML5, CSS3, Bootstrap{" "}
                <span className="date">2022</span>
              </li>
              <p>
                An interface for generating and semantically evaluating Venn
                Diagrams with a proof-checker. Designed an intuitive and dynamic
                interface employing React components and SVG technology.
              </p>
              <li>
                MuPlayground | JavaScript, React, HTML5, CSS3{" "}
                <span className="date">2018</span>
              </li>
              <p>
                A user-friendly interface implementing the logic for
                Hofstadter’s proof system employing React components. Developed
                a gamified version of Hofstadter’s MIU-system as a single-page
                React application.
              </p>
            </ul>
          </section> */}
      </main>
    </div>
  );
};

export default Resume;
