import { useEffect, useState } from "react";
import Logo from "../../assets/icons/Logo";
import CallIcon from "../../assets/icons/CallIcon";
import MailIcon from "../../assets/icons/MailIcon";

const HeaderDesktopAndTablet = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBasicInformation = () => {
    const section = document.getElementById("basic-information");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkillStack = () => {
    const section = document.getElementById("skill-stack");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProject = () => {
    const section = document.getElementById("project");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToEducation = () => {
    const section = document.getElementById("education");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`border-b border-gray-200 flex items-center justify-center sticky top-0 left-0 z-50 bg-white`}
    >
      <div className="w-full max-w-[1440px] flex items-center justify-between">
        <div
          className={`w-full flex items-center justify-between transition-all duration-300 ease-in-out px-8 ${
            isScrolled ? "py-2" : "py-6"
          }`}
        >
          <Logo
            onClick={scrollToProject}
            className={`transition-all duration-300 ease-in-out cursor-pointer ${
              isScrolled ? "h-4" : "h-6"
            }`}
          />
          <ul className="w-full flex items-center justify-center gap-8 text-black/50">
            <li
              onClick={scrollToProject}
              className="hover:font-bold hover:text-black cursor-pointer transition duration-200 ease-in-out"
            >
              프로젝트
            </li>
            <li
              onClick={scrollToBasicInformation}
              className="hover:font-bold hover:text-black cursor-pointer transition duration-200 ease-in-out"
            >
              이력
            </li>
            <li
              onClick={scrollToSkillStack}
              className="hover:font-bold hover:text-black cursor-pointer transition duration-200 ease-in-out"
            >
              보유 기술 스택
            </li>
            <li
              onClick={scrollToEducation}
              className="hover:font-bold hover:text-black cursor-pointer transition duration-200 ease-in-out"
            >
              교육&자격증
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4 py-2 pr-8">
          <a href="tel:+821023285654">
            <CallIcon className="w-6" />
          </a>
          <a href="mailto:qkrcksgh5654@gmail.com">
            <MailIcon className="w-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktopAndTablet;
