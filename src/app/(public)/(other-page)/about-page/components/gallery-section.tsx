"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".gallery-item", {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="px-6 md:px-[120px] pb-[200px]"
        >
            <div className="space-y-12">

                {/* 1️⃣ BIG LANDSCAPE */}
                <GalleryImage variant="big" />

                {/* 2️⃣ TWO LANDSCAPE */}
                <div className="grid grid-cols-2 gap-12">
                    <GalleryImage />
                    <GalleryImage />
                </div>

{/* 3️⃣ PORTRAIT + TWO LANDSCAPE (STACKED) */}
<div className="grid grid-cols-2 gap-12">
    {/* PORTRAIT */}
    <GalleryImage
        variant="portrait"
        className="row-span-2"
    />

    {/* RIGHT SIDE (STACKED LANDSCAPE) */}
    <div className="grid grid-rows-2 gap-12">
        <GalleryImage variant="landscape" />
        <GalleryImage variant="landscape" />
    </div>
</div>


                {/* 4️⃣ TWO LANDSCAPE */}
                <div className="grid grid-cols-2 gap-12">
                    <GalleryImage />
                    <GalleryImage />
                </div>

                {/* 5️⃣ BIG LANDSCAPE */}
                <GalleryImage variant="big" />

            </div>
        </section>
    );
}

function GalleryImage({
    variant = "landscape",
    className = "",
}: {
    variant?: "landscape" | "portrait" | "big";
    className?: string;
}) {
    const aspectClass =
        variant === "portrait"
            ? "aspect-[3/4]"
            : variant === "big"
                ? "aspect-[16/7]"
                : "aspect-[16/9]";

    return (
        <div
            className={`
                gallery-item
                relative
                overflow-hidden
                bg-neutral-900
                ${aspectClass}
                ${className}
            `}
        >
            <Image
                src="/assets/images/test.jpg"
                alt="gallery"
                fill
                className="object-cover"
            />
        </div>
    );
}
