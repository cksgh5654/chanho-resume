import { useEffect, useRef, useState } from "react";
import CallIcon from "../../assets/icons/CallIcon";
import MailIcon from "../../assets/icons/MailIcon";
import Logo from "../../assets/icons/Logo";
import EllipsesIcon from "../../assets/icons/MenuIcon";
import CloseIcon from "../../assets/icons/CloseIcon";

const MENU_ITEMS = [
  { label: "프로젝트", sectionId: "project" },
  { label: "이력", sectionId: "basic-information" },
  { label: "보유 기술 스택", sectionId: "skill-stack" },
  { label: "교육&자격증", sectionId: "education" },
];

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, {
        capture: true,
      });
    };
  }, [isOpen]);

  return (
    <header className="border-b bg-white border-gray-200 z-50 sticky top-0 left-0 overflow-x-hidden">
      <div className="flex items-center justify-center py-2">
        <button
          onClick={() => scrollToSection("project")}
          className="w-full flex items-center justify-center pl-14 cursor-pointer"
        >
          <Logo className="h-4" />
        </button>
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center gap-4 px-4 cursor-pointer"
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
            <button
              onClick={() => scrollToSection("project")}
              className="flex items-center justify-center w-full pl-14 cursor-pointer"
            >
              <Logo className="h-4" />
            </button>
            <button onClick={closeMenu} className="cursor-pointer">
              <CloseIcon className="h-8" />
            </button>
          </div>
          {MENU_ITEMS.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className="w-full flex items-center py-4 text-gray-600 pl-8 border-b border-gray-200 cursor-pointer"
            >
              {label}
            </button>
          ))}
          <div className="flex items-center justify-center gap-4 pt-16">
            <a href="tel:+821023285654" className="cursor-pointer">
              <CallIcon className="w-6" />
            </a>
            <a href="mailto:qkrcksgh5654@gmail.com" className="cursor-pointer">
              <MailIcon className="w-6" />
            </a>
          </div>
          <div className="flex justify-center text-[#7f7e7e] text-xs pt-8 bg-white z-10">
            Copyright © CHANO Corp. All Rights Reserved.
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 w-screen h-screen bg-black/70 z-[50]" />
      )}
    </header>
  );
};

export default HeaderMobile;
