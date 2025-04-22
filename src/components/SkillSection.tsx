import { useEffect, useRef } from "react";
import photoshop from "../assets/icons/adobe photoshop.svg";
import illustrator from "../assets/icons/adobe illustrator.svg";
import premiere from "../assets/icons/adobe premiere.svg";
import xd from "../assets/icons/adobe xd.svg";
import aws from "../assets/icons/aws.svg";
import css from "../assets/icons/css.svg";
import express from "../assets/icons/express.svg";
import figma from "../assets/icons/figma.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import gitlab from "../assets/icons/gitlab.svg";
import html from "../assets/icons/html.svg";
import mongodb from "../assets/icons/mongodb.svg";
import nodejs from "../assets/icons/nodejs.svg";
import npm from "../assets/icons/npm.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind.svg";
import typescript from "../assets/icons/typescript.svg";
import javascript from "../assets/icons/javascriptIcon.svg";
import useDevice from "../hooks/useDevice";

interface SkillLocation {
  x: number;
  y: number;
  scale: number;
}

interface SkillLocations {
  photoshop: SkillLocation;
  illustrator: SkillLocation;
  premiere: SkillLocation;
  xd: SkillLocation;
  aws: SkillLocation;
  css: SkillLocation;
  express: SkillLocation;
  figma: SkillLocation;
  git: SkillLocation;
  github: SkillLocation;
  gitlab: SkillLocation;
  html: SkillLocation;
  mongodb: SkillLocation;
  nodejs: SkillLocation;
  npm: SkillLocation;
  react: SkillLocation;
  tailwind: SkillLocation;
  typescript: SkillLocation;
  javascript: SkillLocation;
}

interface Skill {
  name: string;
  src: string;
  initial: {
    left: number;
    top: number;
    width: number;
  };
}

interface DeviceProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktopLg: boolean;
}

const SKILLS: Skill[] = [
  {
    name: "photoshop",
    src: photoshop,
    initial: { left: 1392, top: 346, width: 77 },
  },
  {
    name: "illustrator",
    src: illustrator,
    initial: { left: 1640, top: 1495, width: 77 },
  },
  {
    name: "premiere",
    src: premiere,
    initial: { left: 449, top: 1793, width: 77 },
  },
  { name: "xd", src: xd, initial: { left: 1468, top: 1773, width: 77 } },
  { name: "aws", src: aws, initial: { left: 1485, top: 704, width: 150 } },
  { name: "css", src: css, initial: { left: 319, top: 1129, width: 128 } },
  {
    name: "express",
    src: express,
    initial: { left: 1302, top: 1355, width: 260 },
  },
  { name: "figma", src: figma, initial: { left: 61, top: 470, width: 83 } },
  { name: "git", src: git, initial: { left: 243, top: 692, width: 165 } },
  {
    name: "github",
    src: github,
    initial: { left: 1733, top: 1541, width: 126 },
  },
  {
    name: "gitlab",
    src: gitlab,
    initial: { left: 703, top: 1355, width: 126 },
  },
  { name: "html", src: html, initial: { left: 1640, top: 306, width: 137 } },
  {
    name: "mongodb",
    src: mongodb,
    initial: { left: 1767, top: 746, width: 128 },
  },
  {
    name: "nodejs",
    src: nodejs,
    initial: { left: 1065, top: 152, width: 110 },
  },
  {
    name: "npm",
    src: npm,
    initial: { left: 989, top: 1673, width: 126 },
  },
  {
    name: "react",
    src: react,
    initial: { left: 304, top: 296, width: 162 },
  },
  {
    name: "tailwind",
    src: tailwind,
    initial: { left: 49, top: 988, width: 110 },
  },
  {
    name: "typescript",
    src: typescript,
    initial: { left: 806, top: 462, width: 140 },
  },
  {
    name: "javascript",
    src: javascript,
    initial: { left: 14, top: 1451, width: 180 },
  },
];

const getTitlePadding = ({
  isMobile,
  isTablet,
  isDesktopLg,
}: DeviceProps): string =>
  isMobile
    ? "py-[225px]"
    : isTablet
    ? "py-[200px]"
    : isDesktopLg
    ? "py-[200px]"
    : "py-[300px]";

const getSkillLocations = ({
  isMobile,
  isTablet,
  isDesktopLg,
}: DeviceProps): SkillLocations =>
  isMobile
    ? {
        photoshop: { x: -401, y: 1078, scale: 0.7 },
        illustrator: { x: -550, y: 321, scale: 0.7 },
        premiere: { x: 463, y: 101, scale: 0.7 },
        xd: { x: -434, y: 107, scale: 0.7 },
        aws: { x: -467, y: 795, scale: 0.7 },
        css: { x: 521, y: 683, scale: 0.7 },
        express: { x: -340, y: 407, scale: 0.7 },
        figma: { x: 730, y: 942, scale: 0.7 },
        git: { x: 510, y: 827, scale: 0.7 },
        github: { x: -670, y: 373, scale: 0.7 },
        gitlab: { x: 202, y: 420, scale: 0.7 },
        html: { x: -575, y: 1067, scale: 0.7 },
        mongodb: { x: -700, y: 724, scale: 0.7 },
        nodejs: { x: -124, y: 1198, scale: 0.7 },
        npm: { x: -14, y: 158, scale: 0.7 },
        react: { x: 543, y: 1141, scale: 0.7 },
        tailwind: { x: 744, y: 800, scale: 0.7 },
        typescript: { x: 114, y: 1002, scale: 0.7 },
        javascript: { x: 730, y: 400, scale: 0.7 },
      }
    : isTablet
    ? {
        photoshop: { x: -374, y: 1140, scale: 0.5 },
        illustrator: { x: -380, y: 359, scale: 0.5 },
        premiere: { x: 400, y: 117, scale: 0.5 },
        xd: { x: -367, y: 109, scale: 0.5 },
        aws: { x: -410, y: 858, scale: 0.5 },
        css: { x: 400, y: 659, scale: 0.5 },
        express: { x: -207, y: 468, scale: 0.5 },
        figma: { x: 552, y: 1017, scale: 0.5 },
        git: { x: 412, y: 882, scale: 0.5 },
        github: { x: -523, y: 360, scale: 0.5 },
        gitlab: { x: 178, y: 457, scale: 0.5 },
        html: { x: -477, y: 1164, scale: 0.5 },
        mongodb: { x: -530, y: 772, scale: 0.5 },
        nodejs: { x: -141, y: 1312, scale: 0.5 },
        npm: { x: -4, y: 170, scale: 0.5 },
        react: { x: 440, y: 1205, scale: 0.5 },
        tailwind: { x: 520, y: 812, scale: 0.5 },
        typescript: { x: 78, y: 1090, scale: 0.5 },
        javascript: { x: 610, y: 436, scale: 0.5 },
      }
    : isDesktopLg
    ? {
        photoshop: { x: -282, y: 1184, scale: 0.45 },
        illustrator: { x: -307, y: 265, scale: 0.45 },
        premiere: { x: 304, y: 111, scale: 0.45 },
        xd: { x: -282, y: 117, scale: 0.45 },
        aws: { x: -293, y: 902, scale: 0.5 },
        css: { x: 303, y: 646, scale: 0.5 },
        express: { x: -151, y: 451, scale: 0.5 },
        figma: { x: 452, y: 1009, scale: 0.5 },
        git: { x: 358, y: 934, scale: 0.45 },
        github: { x: -390, y: 353, scale: 0.45 },
        gitlab: { x: 125, y: 452, scale: 0.45 },
        html: { x: -377, y: 1141, scale: 0.45 },
        mongodb: { x: -402, y: 823, scale: 0.45 },
        nodejs: { x: -41, y: 1286, scale: 0.45 },
        npm: { x: -7, y: 195, scale: 0.45 },
        react: { x: 382, y: 1195, scale: 0.45 },
        tailwind: { x: 428, y: 711, scale: 0.45 },
        typescript: { x: 78, y: 1069, scale: 0.45 },
        javascript: { x: 462, y: 413, scale: 0.45 },
      }
    : {
        photoshop: { x: -235, y: 1045, scale: 0.3 },
        illustrator: { x: -196, y: 191, scale: 0.3 },
        premiere: { x: 250, y: 77, scale: 0.3 },
        xd: { x: -224, y: 80, scale: 0.3 },
        aws: { x: -221, y: 784, scale: 0.3 },
        css: { x: 221, y: 576, scale: 0.3 },
        express: { x: -120, y: 390, scale: 0.3 },
        figma: { x: 329, y: 854, scale: 0.3 },
        git: { x: 307, y: 838, scale: 0.3 },
        github: { x: -280, y: 316, scale: 0.3 },
        gitlab: { x: 93, y: 373, scale: 0.3 },
        html: { x: -286, y: 978, scale: 0.3 },
        mongodb: { x: -300, y: 694, scale: 0.3 },
        nodejs: { x: -19, y: 1120, scale: 0.3 },
        npm: { x: -5, y: 152, scale: 0.3 },
        react: { x: 308, y: 1043, scale: 0.3 },
        tailwind: { x: 294, y: 620, scale: 0.3 },
        typescript: { x: 62, y: 929, scale: 0.3 },
        javascript: { x: 329, y: 368, scale: 0.3 },
      };

const SkillSection = () => {
  const { isMobile, isTablet, isDesktopLg } = useDevice();
  const timelineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillRefs = useRef<Record<string, HTMLImageElement | null>>({});
  const rafRef = useRef<number | null>(null);

  const deviceProps: DeviceProps = { isMobile, isTablet, isDesktopLg };
  const titlePadding = getTitlePadding(deviceProps);
  const skillLocations = getSkillLocations(deviceProps);

  const animate = () => {
    const timeline = timelineRef.current;
    const title = titleRef.current;
    const skills = Object.values(skillRefs.current).filter(
      Boolean
    ) as HTMLImageElement[];

    if (!timeline || !title || skills.length !== SKILLS.length) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const progress = Math.min(
      Math.max(-rect.top / (rect.height - windowHeight), 0),
      1
    );

    title.style.opacity = `${Math.max((progress - 0.5) / 0.5, 0)}`;

    skills.forEach((skill) => {
      const name = skill.dataset.name as keyof SkillLocations;
      const location = skillLocations[name];
      const newTransform = `translateX(${location.x * progress}px) translateY(${
        location.y * progress
      }px) scale(${1 - location.scale * progress})`;
      const newOpacity = Math.max(progress, 0.2);

      if (
        skill.style.transform !== newTransform ||
        skill.style.opacity !== `${newOpacity}`
      ) {
        skill.style.transform = newTransform;
        skill.style.opacity = `${newOpacity}`;
      }
    });

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleScrollOrResize = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);
    handleScrollOrResize();

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isMobile, isTablet, isDesktopLg]);

  return (
    <section className="overflow-hidden">
      <div
        ref={timelineRef}
        className="flex justify-center items-end relative w-[1920px] h-[2000px] mb-[256px] translate-x-[calc(50vw-960px)]"
      >
        <h1
          id="skill-stack"
          ref={titleRef}
          className={`text-5xl font-bold text-center text-gray-800 leading-snug ${titlePadding}`}
        >
          최적화된 {isMobile && <br />}UI/UX를 위한
          <br />
          프론트엔드 기술
        </h1>
        {SKILLS.map((skill) => (
          <img
            key={skill.name}
            ref={(el) => {
              skillRefs.current[skill.name] = el;
            }}
            data-name={skill.name}
            src={skill.src}
            alt={skill.name}
            className="absolute"
            style={{
              left: `${skill.initial.left}px`,
              top: `${skill.initial.top}px`,
              width: `${skill.initial.width}px`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
