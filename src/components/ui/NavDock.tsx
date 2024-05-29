import { useState } from "react";

export default function NavDock({ currentUrl }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="z-50 fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-24 bg-white mix-blend-difference px-32 py-12 flex max-[500px]:flex-col gap-24">
      <div className={isOpen ? "flex gap-24" : "hidden"}>
        <a
          href="/"
          className={`text-body text-white mix-blend-difference ${
            currentUrl === "/" ? "font-black" : ""
          }`}
        >
          index
        </a>
        <a
          href="/about"
          className={`text-body text-white mix-blend-difference ${
            currentUrl === "/about" ? "font-black" : ""
          }`}
        >
          about
        </a>
        <a
          href="/projects"
          className={`text-body text-white mix-blend-difference ${
            currentUrl === "/projects" ? "font-black" : ""
          }`}
        >
          projects
        </a>
        <a
          href="/organizations"
          className={`text-body text-white mix-blend-difference ${
            currentUrl === "/organizations" ? "font-black" : ""
          }`}
        >
          organizations
        </a>
        <a
          href="/journals"
          className={`text-body text-white mix-blend-difference ${
            currentUrl === "/journals" ? "font-black" : ""
          }`}
        >
          journal
        </a>
        <a
          href="/contact"
          className={`text-body text-white mix-blend-difference ${
            currentUrl === "/contact" ? "font-black" : ""
          }`}
        >
          contact
        </a>
      </div>
      <div className="flex gap-32">
        <a
          href="/"
          className="text-body text-white mix-blend-difference min-[500px]:hidden"
        >
          dukc
        </a>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="min-[500px]:hidden hover:scale-110 active:scale-90 duration-200 ease-out"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2 9.75C2 9.33579 2.33579 9 2.75 9H17.25C17.6642 9 18 9.33579 18 9.75C18 10.1642 17.6642 10.5 17.25 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75ZM2.75 14C2.33579 14 2 14.3358 2 14.75C2 15.1642 2.33579 15.5 2.75 15.5H17.25C17.6642 15.5 18 15.1642 18 14.75C18 14.3358 17.6642 14 17.25 14H2.75Z"
              fill="#212121"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
