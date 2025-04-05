import React from "react";
import Image from "next/image";
// import { ScrollProgress } from "@/components/magicui/scroll-progress";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { ChevronRight, ArrowUpRight, Github, ExternalLink } from "lucide-react";
// import { Dribbble, Instagram } from "lucide-react";
// import HtmlIcon from "@/components/icons/html";
// import CssIcon from "@/components/icons/css";
import NodeJs from "@/components/icons/nodeJs";
import LinkedInIcon from "@/components/icons/linkedIn";
// import BehenceIcon from "@/components/icons/behence";
// import BootstrapIcon from "@/components/icons/bootstrap";
import JavaScriptIcon from "@/components/icons/javascript";
// import LaravelIcon from "@/components/icons/laravel";
import MongoDBIcon from "@/components/icons/mongodb";
import MySQLIcon from "@/components/icons/mysql";
import Nextjs from "@/components/icons/nextjs";
// import PhpIcon from "@/components/icons/php";
import PostgreSQLIcon from "@/components/icons/postgresql";
// import PythonIcon from "@/components/icons/python";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwindcss";
import { BorderBeam } from "@/components/magicui/border-beam";
import { SiAwsamplify, SiShadcnui } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const width = 40;
const height = 40;

export default function Page() {
  const contactData = [

    {
      icons: <LinkedInIcon width={28} height={28} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vijaydabhi/",
    },
  ];
  return (
    <div className="grid gap-10">
      <div className="grid sm:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="card_bg p-10 max-h-fit">
          <div className="flex items-center justify-center">
            <Image src="/_DSC8303.png" alt="profile" width={250} height={100} />
          </div>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Vijay Dabhi</h1>
            <p>
              <a href="mailto:vijaydabhi0428@gmail.com" className="opacity-50">
                @vijaydabhi
              </a>
            </p>
            <p className="flex gap-4 items-center justify-center">
              {contactData.map((contact, index) => (
                <a href={contact.url} key={index} className="card_bg p-1">
                  {contact.icons}
                </a>
              ))}
            </p>

            <Button className="cursor-pointer z-50">
              <a href="mailto:vijaydabhi0428@gmail.com">Contact Me</a>
            </Button>
          </div>
          {/* <BorderBeam duration={8} size={100} /> */}
        </div>

        {/* Right Section */}
        <div className="grid sm:col-span-2 gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-400 leading-relaxed text-base space-y-4">
                I&#39;m Vijaykumar Dabhi, a Backend Developer at York.IE specializing in Node.js, NestJS, and AWS. I build scalable, high-performance applications while expanding my expertise in GraphQL and cloud technologies. My experience includes:
              </p>

              <ul className="text-gray-400 mt-4 space-y-2 list-disc pl-5">
                <li>Developing backend systems and GraphQL APIs with DynamoDB integration</li>
                <li>Leading R&D on data security in Amazon Redshift and QuickSight</li>
                <li>Creating VJson, a tool for JSON visualization with real-time parsing</li>
                <li>Working with frontend technologies like React.js, Next.js, and Tailwind CSS</li>
              </ul>

              <p className="text-gray-400 mt-4 leading-relaxed text-base">
                Passionate about problem-solving and optimization, I actively contribute to open-source projects and stay current with industry trends through tech meetups and hackathons.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Programming Languages
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex bg-blue-600/5 rounded-3xl p-2 gap-4 justify-around">
                      <JavaScriptIcon width={width} height={height} />
                    </div>
                  </div>
                  <BorderBeam duration={6} size={100} />
                </div>
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Frameworks & Libraries
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex bg-green-600/5 rounded-3xl p-2 gap-4 justify-around">
                      <Nextjs width={width} height={height} />
                      <TailwindIcon width={width} height={height} />
                    </div>
                    <div className="flex rounded-3xl p-2 gap-4 justify-around">
                      <ReactIcon width={width} height={height} />
                      <SiShadcnui width={width} height={height} />
                    </div>
                  </div>
                  <BorderBeam duration={5} size={100} />
                </div>
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Database & Backend
                  </h3>
                  <div className="flex bg-green-600/5 rounded-3xl p-2 gap-4 justify-around">
                    <PostgreSQLIcon width={width} height={height} />
                    <NodeJs width={width} height={height} />
                  </div>
                  <div className="flex rounded-3xl p-2 gap-4 justify-around">
                    <MongoDBIcon width={width} height={height} />
                    <MySQLIcon width={width} height={height} />
                  </div>
                  <BorderBeam duration={4} size={100} />
                </div>
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Cloud
                  </h3>
                  <div className="flex bg-green-600/5 rounded-3xl p-2 gap-4 justify-around">
                    <FaAws width={width} height={height} />
                    <SiAwsamplify width={width} height={height} />
                  </div>
                  <BorderBeam duration={4} size={100} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {/* Experience Section */}
        <section className="py-12 card_bg px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Software Engineer 1</h3>
                <p className="text-gray-500 mb-2">York.IE | Present</p>
                <ul className="list-disc ml-6">
                  <li>Developing and optimizing backend systems using Node.js, NestJS, and AWS.</li>
                  <li>Implementing GraphQL APIs and managing database integrations (DynamoDB).</li>
                  <li>Led R&D on critical data security in Amazon Redshift and QuickSight to ensure secure data handling.</li>
                  <li>Built and managed repositories using AI-powered services from Amazon Q within QuickSight.</li>
                  <li>Conducted testing and optimization to enhance application efficiency and reliability.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Software Developer Intern</h3>
                <p className="text-gray-500 mb-2">eInfochips (An Arrow Company) | 2024</p>
                <ul className="list-disc ml-6">
                  <li>Developed a web UI to manage hardware through Raspberry Pi, using Socket programming and other services.</li>
                  <li>Implemented real-time communication between the frontend and hardware using WebSockets.</li>
                  <li>Built and optimized backend systems using Node.js and Express.js for seamless device control.</li>
                  <li>Designed a user-friendly interface to monitor and manage hardware components remotely.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section className="py-12 card_bg px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Technology (Computer Science)
                </h3>
                <p className="text-gray-500 mb-2">
                  Ganpat University - U. V. Patel College of Engineering | 2020 – 2024
                </p>
                <p className="text-gray-500">CGPA: 7.84/10.0</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  class XII
                </h3>
                <p className="text-gray-500 mb-2">
                  Saraswati NES High School | 2018 – 2020
                </p>
                <p className="text-gray-500">Percentage: 64%</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  class X
                </h3>
                <p className="text-gray-500 mb-2">
                  Saraswati NES High School | 2018
                </p>
                <p className="text-gray-500">Percentage: 68%</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {/* Credentials Section */}
        <section className="card_bg p-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Credentials</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">SSIP Hackathon Finalist 2022</h3>
                <p className="text-gray-700">
                  Developed an innovative solution and reached the finals
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Event Volunteer at York.IE</h3>
                <p className="text-gray-700">
                  Assisted in managing and organizing company events
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Community Engagement</h3>
                <p className="text-gray-700">
                  Participate in tech meetups, hackathons, and developer forums
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="card_bg p-4">
          <div className="container mx-auto px-4">
            <div className=""></div>
            <div className="flex">
              <div>
                <h1 className="font-bold text-4xl">Let&apos;s </h1>
                <h2 className="font-bold text-4xl">Work Together.</h2>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
