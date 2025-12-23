import Link from "next/link";
import { MobileNavbar } from "./mobile-navbar";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white ">
      <div className=" mx-auto py-6 px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white font-ibm">
            <Link href="/">CProgammer</Link>
          </div>

          {/* desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="text-base text-white transition font-ibm">
              <span>News</span>
            </Link>
            <Link
              href="/documentation"
              className="text-base text-white transition font-ibm"
            >
              <span>Document</span>
            </Link>
            <Link href="#" className="text-base text-white transition font-ibm">
              <span>About</span>
            </Link>
            <Link href="#" className="text-base text-white transition font-ibm">
              <span>About</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <div className="border border-white hover:bg-white text-white hover:text-black transition-colors duration-300 px-4 py-2 rounded-full">
              <Link href="#" className="text-sm font-light transition font-ibm">
                Contact / Join
              </Link>
            </div>
          </div>

          {/* mobile */}
          <div className="md:hidden cursor-pointer">
            <MobileNavbar/>
          </div>
        </div>
      </div>
    </nav>
  );
}
