import Image from 'next/image'
import {BsDribbble, BsDroplet, BsFillMoonStarsFill} from 'react-icons/bs'
import { AiFillGithub, AiFillGitlab, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { SiGooglescholar } from "react-icons/si";
import brian from '/public/brian.jpeg'
import bdr from '/public/bdr.png'

export default function Home() {
  return (
    <main className="px-10">
      <section className="min-h-screen">
        <nav className="py-8 mb-12 flex justify-between items-center"> 
           <h1 className="text-xl font-mono"></h1> 
          <ul className="flex items-center">
            <li> <BsFillMoonStarsFill className=" text-gray-600 cursor-pointer text-2xl"/>
            </li>
            <li className="bg-gray-600 px-4 py-2 rounded-full ml-8 text-sm">resume</li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-myblue-50 font-medium">Brian Rabern</h2>
          <h3 className="text-2xl py-2 font-mono">Software Engineer</h3>
          <p className="text-md py-5 leading-8 text-gray-600">With ten years of experience as a philosophy and logic professor using formal methods to model meaning and human communication, I’m now applying my skills to the technology sector. I bring a unique perspective to the development process where I create products that are not only functional but also deeply meaningful to users.</p>
        </div>
        <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillGithub/>
          <AiFillGitlab/> 
          <AiFillLinkedin/>
          <SiGooglescholar/>
          <AiFillTwitterCircle/>
        </div>
        <div className="mx-auto flex items-center relative bg-gradient-to-b from-gray-400 rounded-full w-40 h-40 mt-20 overflow-hidden">
          <Image src={bdr}/>
        </div>
      </section>
      <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={bdr} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={bdr} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={bdr} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
               
                src={bdr}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
               
                src={bdr}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
               
                src={bdr}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
               
                src={bdr}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
               
                src={bdr}
              />
            </div>
            <div className="basis-1/3 flex-1">
              
            </div>
          </div>
        </section>
    </main>
  )
}
