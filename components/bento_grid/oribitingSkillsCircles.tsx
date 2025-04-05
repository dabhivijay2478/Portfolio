import React from "react";
import { OrbitingCircles } from "../magicui/orbiting-circles";
import {
  FaAws,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiVercel,
  SiMongodb,
  SiAmazondynamodb,
  SiGithub,
  SiPostgresql,
  SiShadcnui,
  SiAwsamplify
} from "react-icons/si";

export default function OribitingSkillsCircles() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <OrbitingCircles iconSize={60} radius={120}>
        <FaAws className="h-10 w-10" />
        <SiMongodb className="h-10 w-10" />
        <FaReact className="h-10 w-10" />
        <SiNextdotjs className="h-10 w-10" />
        <SiVercel className="h-10 w-10" />
        <SiTailwindcss className="h-10 w-10" />
        <SiShadcnui className="h-10 w-10" />
        <SiAmazondynamodb className="h-10 w-10" />
        <SiAwsamplify className="h-10 w-10" />
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={50}>
        <SiGithub className="h-10 w-10" />
        <SiPostgresql className="h-10 w-10" />
      </OrbitingCircles>
    </div>
  );
}