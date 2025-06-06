"use client";
/*
Navibar7
*/

import Link from "next/link";
import Image from "next/image";
const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export interface Navbar7Props {
    logo: {
        src: string;
        alt: string;
        url: string;
    };
    links: {
        title: string;
        url: string;
    }[];
    socialLinks: {
      title: string;
      type: "facebook" | "instagram" | "twitter" | "linkedin" | "youtube";
      url: string;
      handle: string;
    }[];
}

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    if(!isMobile) setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    if(!isMobile) setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
    setIsMobileMenuOpen,
  };
};

export function Navbar7(props: Navbar7Props) {
  const useActive = useRelume();
  return (
    <section
      id="kuroneko-navbar7"
      className="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <Link href={props.logo.url}>
          <Image
            src={`${imageBasePath}${props.logo.src}`}
            alt={props.logo.alt}
            width={200}
            height={44}
            style={{
              width: "200px",
              height: "auto"
            }}
          />
        </Link>
        <div className="absolute hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pt-4 pb-24 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex justify-between w-full">
            <div className="flex flex-1 flex-col items-center lg:flex-row">
              {props.links.map((link, index) => (
                  <Link
                      href={link.url}
                      key={index}
                      className="relative block w-auto py-3 text-md lg:inline-block lg:px-3 lg:py-6 lg:text-base"
                  >
                      {link.title}
                  </Link>
              ))}
            </div>
            <div className="flex flex-col items-center justify-end lg:flex-row">
              {props.socialLinks.map((socialLink, index) => (
                <Link href={socialLink.url} key={index} className="block py-3 text-md">
                  {socialLink.type === "facebook" && (
                    <BiLogoFacebookCircle className="size-6" />
                  )}
                  {socialLink.type === "instagram" && (
                    <BiLogoInstagram className="size-6" />
                  )}
                  {socialLink.type === "twitter" && (
                    <FaXTwitter className="size-6 p-0.5" />
                  )}
                  {socialLink.type === "linkedin" && (
                    <BiLogoLinkedinSquare className="size-6" />
                  )}
                  {socialLink.type === "youtube" && (
                    <BiLogoYoutube className="size-6" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute top-full right-0 left-0 w-full overflow-hidden bg-white bg-opacity-95 lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute top-0 right-0 left-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pt-4 pb-8"
          >
            <div className="flex flex-col">
                {props.links.map((link, index) => (
                    <Link
                      href={link.url}
                      key={index}
                      className="block py-3 text-md"
                      onClick={() => useActive.setIsMobileMenuOpen(false)}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
            <div className="flex flex-col">
              {props.socialLinks.map((socialLink, index) => (
                <Link href={socialLink.url} key={index} className="block py-3 text-md">
                  {socialLink.type === "facebook" && (
                    <div className="flex items-center gap-2">
                      <BiLogoFacebookCircle className="size-6" />
                      <span>{socialLink.handle}</span>
                    </div>
                  )}
                  {socialLink.type === "instagram" && (
                    <div className="flex items-center gap-2">
                      <BiLogoInstagram className="size-6" />
                      <span>@{socialLink.handle}</span>
                    </div>
                  )}
                  {socialLink.type === "twitter" && (
                    <div className="flex items-center gap-2">
                      <FaXTwitter className="size-6 p-0.5" />
                      <span>@{socialLink.handle}</span>
                    </div>
                  )}
                  {socialLink.type === "linkedin" && (
                    <div className="flex items-center gap-2">
                      <BiLogoLinkedinSquare className="size-6" />
                      <span>{socialLink.handle}</span>
                    </div>
                  )}
                  {socialLink.type === "youtube" && (
                    <div className="flex items-center gap-2">
                      <BiLogoYoutube className="size-6" />
                      <span>{socialLink.handle}</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
