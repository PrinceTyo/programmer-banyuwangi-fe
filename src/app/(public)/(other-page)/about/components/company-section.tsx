"use client";


export default function CompanySection() {
    return (

        
        <section className="relative px-6 md:px-[120px] pb-[160px] md:pb-[200px] overflow-hidden">
    {/* BG */}
    <div
        className="
            absolute inset-0
            bg-[url('/assets/images/goku.jpg')]
            bg-cover bg-center
            blur-sm
            scale-105
        "
    />

    <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-[80px]">

            {/* ================= LEFT : HEADER ================= */}
            <div className="md:col-span-4">
                <h2 className="text-[28px] md:text-[34px] font-normal leading-[1.1]">
                    Company Profile
                </h2>
            </div>

            {/* ================= RIGHT : CONTENT ================= */}
            <div className="md:col-span-8 max-w-[820px] space-y-6 text-[14px] md:text-[15px] text-white/65 md:pt-[16px]">
                {[
                    ["Company", "Creative Studio Inc."],
                    ["Founded", "2019"],
                    ["CEO", "John Doe"],
                    ["Capital", "¥10,000,000"],
                    ["Location", "Tokyo, Japan"],
                    ["Business", "Interactive digital experiences"],
                ].map(([label, value], i) => (
                    <div
                        key={i}
                        className="flex justify-between gap-8 border-b border-white/10 pb-4"
                    >
                        <span className="text-white/40">{label}</span>
                        <span className="text-right">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>
    );
}