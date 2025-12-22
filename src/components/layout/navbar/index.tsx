import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white ">
      <div className=" mx-auto py-6 px-16">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white font-ibm">
            <Link href="/">Your Name</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#work"
              className="text-base text-white transition font-ibm"
            >
              <span>News</span>
            </Link>
            <Link
              href="#work"
              className="text-base text-white transition font-ibm"
            >
              <span>Portfolio</span>
            </Link>
            <Link
              href="#work"
              className="text-base text-white transition font-ibm"
            >
              <span>About</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="#contact" className="text-white transition font-ibm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
