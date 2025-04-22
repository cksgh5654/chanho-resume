import { useEffect, useRef, useState } from "react";
import CallIcon from "../../assets/icons/CallIcon";
import MailIcon from "../../assets/icons/MailIcon";
import Logo from "../../assets/icons/Logo";
import EllipsesIcon from "../../assets/icons/MenuIcon";
import CloseIcon from "../../assets/icons/CloseIcon";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  const scrollToBasicInformation = () => {
    const section = document.getElementById("basic-information");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  const scrollToSkillStack = () => {
    const section = document.getElementById("skill-stack");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToProject = () => {
    const section = document.getElementById("project");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToEducation = () => {
    const section = document.getElementById("education");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <header className="border-b bg-white border-gray-200 z-50 sticky top-0 left-0 ">
      <div className="flex items-center justify-center py-2">
        <div className="w-full flex items-center justify-center pl-14">
          <Logo className="h-4" />
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex items-center justify-center gap-4 px-4"
        >
          <EllipsesIcon className="h-8" />
        </button>
      </div>
      <div
        ref={menuRef}
        className={`fixed top-0 overflow-x-hidden z-[99] bg-white w-[375px] h-screen transform ${
          isOpen ? "translate-x-[calc(100vw-375px)]" : "translate-x-[100vw]"
        } duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center py-2 border-b border-gray-200">
            <div className="flex items-center justify-center w-full pl-14">
              <Logo className="h-4" />
            </div>
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon className="h-8" />
            </button>
          </div>
          <button
            onClick={scrollToBasicInformation}
            className="w-full flex items-center py-4 text-gray-600 pl-8 border-b border-gray-200"
          >
            이력
          </button>
          <button
            onClick={scrollToSkillStack}
            className="w-full flex items-center py-4 text-gray-600 pl-8 border-b border-gray-200"
          >
            보유 기술 스택
          </button>
          <button
            onClick={scrollToProject}
            className="w-full flex items-center py-4 text-gray-600 pl-8 border-b border-gray-200"
          >
            프로젝트
          </button>
          <button
            onClick={scrollToEducation}
            className="w-full flex items-center py-4 text-gray-600 pl-8 border-b border-gray-200"
          >
            교육&자격증
          </button>
          <div className="flex items-center justify-center gap-4 pt-16">
            <a href="tel:+821023285654">
              <CallIcon className="w-6" />
            </a>
            <a href="mailto:qkrcksgh5654@gmail.com">
              <MailIcon className="w-6" />
            </a>
          </div>
          <div className="flex justify-center text-[#7f7e7e] text-xs pt-8 bg-white z-10">
            Copyright © CHANO Corp. All Rights Reserved.
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 w-screen h-screen bg-black/70 z-[50]"></div>
      )}
    </header>
  );
};
export default HeaderMobile;
