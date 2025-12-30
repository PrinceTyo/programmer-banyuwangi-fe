"use client";

import SplitTextTitle from "@/components/split-text/split-text-title";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ContactLink() {
  const contactRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".contact-link",
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: {
          each: 0.08,
          from: "start",
        },
      }
    );

    gsap.fromTo(
      ".recruit-link",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: {
          each: 0.08,
          from: "start",
        },
        delay: 0.5,
      }
    );
  });

  return (
    <div ref={contactRef} className="w-full pb-40">
      <div className="mb-20 md:mb-32">
        <SplitTextTitle
          text="Contact / Recruit"
          className="text-white font-geologica font-bold text-5xl lg:text-7xl leading-tight max-w-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 gap-14 md:gap-24">
        <div className="hidden md:block md:col-span-3"></div>

        <div className="md:col-span-6 flex flex-col gap-20">
          <div className="contact-link flex flex-col gap-6">
            <h2 className="text-white font-jetbrains text-sm md:text-2xl">
              ご依頼、取材、採用、その他問い合わせについてはフォームよりご連絡ださい。
            </h2>
            <p className="text-[#BABABA] font-jetbrains text-xs md:text-sm">
              For jobs, interviews, hiring, and other inquiries, please contact
              us using the form.
            </p>

            <Link
              href="https://www.instagram.com/programmer_banyuwangi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/20 hover:border-white/40 transition-colors pt-10 pb-4 w-1/2"
            >
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold font-jetbrains text-2xl">
                  Contact
                </span>
                <span className="text-[#BABABA] font-jetbrains text-sm">
                  フォームからお問い合わせ
                </span>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#BABABA] flex items-center justify-center group-hover:bg-white transition-colors">
                <IoIosArrowForward className="text-white group-hover:text-black" />
              </div>
            </Link>
          </div>

          <div className="recruit-link flex flex-col gap-6">
            <p className="text-white/80 font-jetbrains text-sm md:text-base">
              採用に関する最新情報は、下記Notionをご覧ください。
            </p>
            <p className="text-white/60 font-jetbrains text-xs md:text-sm">
              For the latest information on job openings, please visit our
              Notion Page below.
            </p>

            <Link
              href="https://www.instagram.com/programmer_banyuwangi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/20 hover:border-white/40 transition-colors pt-10 pb-4 w-1/2"
            >
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold font-jetbrains text-2xl">
                  Recruit
                </span>
                <span className="text-[#BABABA] font-jetbrains text-sm">
                  フォームからお問い合わせ
                </span>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#BABABA] flex items-center justify-center group-hover:bg-white transition-colors">
                <IoIosArrowForward className="text-white group-hover:text-black" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
