"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function TrustedBy() {
    const topRow = useRef<HTMLDivElement>(null);
    const bottomRow = useRef<HTMLDivElement>(null);

useEffect(() => {
    const ctx = gsap.context(() => {
        const topEl = topRow.current!;
        const bottomEl = bottomRow.current!;

        const topWidth = topEl.scrollWidth / 2;
        const bottomWidth = bottomEl.scrollWidth / 2;

        let topX = 0;
        let bottomX = 0;

        const speedTop = 1;     // ke kanan
        const speedBottom = -1; // ke kiri

        const wrapTop = gsap.utils.wrap(-topWidth, 0);
        const wrapBottom = gsap.utils.wrap(-bottomWidth, 0);

        gsap.ticker.add(() => {
            topX += speedTop;
            bottomX += speedBottom;

            gsap.set(topEl, {
                x: wrapTop(topX),
            });

            gsap.set(bottomEl, {
                x: wrapBottom(bottomX),
            });
        });
    });

    return () => ctx.revert();
}, []);




    return (
        <section className="px-6 md:px-[120px] pb-[160px] overflow-hidden">
            <h2 className="text-[14px] uppercase tracking-[0.3em] text-white/40 mb-10">
                Trusted By
            </h2>

            {/* TOP ROW */}

            <div
                ref={topRow}
                className="flex gap-12 w-max mb-16 "
            >
                {[...Array(2)].map((_, dupIndex) =>
                    Array.from({ length: 9 }).map((_, i) => (
                        <LogoBox key={`${dupIndex}-${i}`} />
                    ))
                )}
            </div>

            {/* BOTTOM ROW */}

            <div
                ref={bottomRow}
                className="flex gap-12 w-max"
            >
                {[...Array(2)].map((_, dupIndex) =>
                    Array.from({ length: 9 }).map((_, i) => (
                        <LogoBox key={`${dupIndex}-${i}`} />
                    ))
                )}
            </div>


        </section>
    );
}

function LogoBox() {
    return (
        <div className=" bg-white  items-center justify-center">
            {/* GANTI LOGO */}

            <Image
                src="/assets/images/c++.png"
                alt="logo"
                width={100}
                height={24}
                
            />


        </div>
    );
}
