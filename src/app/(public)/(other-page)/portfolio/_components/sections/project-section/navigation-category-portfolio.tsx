import Link from "next/link";

export default function NavigationCategoryPortfolio() {
  return (
    <div className="flex-3 mt-26">
      <div className="sticky top-50 h-96 rounded-lg flex-3">
        <Link href="#" className="inline-flex items-center gap-2 font-acumin">
          <span className="text-white text-base tracking-wide">ALL</span>
          <span className="text-[#BABABA] text-[10px]">[12]</span>
        </Link>
      </div>
    </div>
  );
}
