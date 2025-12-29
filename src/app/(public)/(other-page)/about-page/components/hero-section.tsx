"use client";


export default function HeroSection() {
    return (
<section className="relative px-6 md:px-[120px] pt-[100px] md:pt-[140px] mb-24">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16">

        {/* ================= LEFT : ABOUT ================= */}
        <div className="md:col-span-6">
            <p className="text-[48px] md:text-7xl font-bold text-white">
                About
            </p>
        </div>

        {/* ================= RIGHT : CONTENT ================= */}
        <div className="md:col-span-6 flex flex-col gap-y-16 md:gap-y-[80px] md:pt-[120px]">

            {/* ===== Vision ===== */}
            <div className="max-w-[640px]">
                <p className="text-[12px] md:text-[14px] tracking-widest text-white/50 mb-4 md:mb-6">
                    Vision
                </p>

                <h2 className="text-[22px] md:text-[28px] leading-[1.6] font-medium mb-4 md:mb-6">
                    心を揺さぶり、
                    <br />
                    希望を持てる&quot;世界&quot;を作る
                </h2>

                <p className="text-[16px] md:text-[18px] text-white leading-[1.8]">
                    Architect worlds that move hearts and spark hope.
                </p>
            </div>

            {/* ===== Description JP ===== */}
            <div className="max-w-[720px] text-[16px] md:text-[18px] leading-[2] text-white space-y-6 md:space-y-10">
                <p>
                    Alcheは、デジタルネイティブ時代において、
                    これまでにないエンターテインメント体験を
                    生み出す企業です。
                </p>

                <p>
                    Unreal Engineを軸に、リアルタイム技術と
                    インタラクティブな表現を融合させ、
                    新しい価値を創造します。
                </p>

                <p>
                    私たちは、技術とクリエイティビティの力で、
                    人々の心を揺さぶり、希望を持てる&quot;世界&quot;
                    を作り出すことを目指しています。
                </p>
            </div>

            {/* ===== Description EN ===== */}
            <div className="max-w-[720px] text-[11px] leading-[1.8] text-white/50 space-y-3">
                <p>
                    Alche creates unprecedented entertainment experiences in the age of digital natives.
                </p>
                <p>
                    By creating innovative events and interactive experiences,
                    we deliver moments people will remember.
                </p>
            </div>

            {/* ===== IMAGE ===== */}
            <img
                src="/assets/images/test.jpg"
                alt=""
                className="w-full max-w-[720px]"
            />
        </div>
    </div>
</section>

    );
}  