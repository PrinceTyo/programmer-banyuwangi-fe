import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-end justify-start h-screen">
      <div className="flex flex-row items-center gap-8 mx-20 mb-10">
        <div className="font-google text-white">
          <h1 className="text-9xl font-medium">404</h1>
        </div>
        <div className="font-google text-[#BABABA]">
          <div className="flex flex-col gap-6">
            <div className="text-[#BABABA]">
              <p className="text-3xl font-medium">That page has gone missing.</p>
            </div>
            <div className="text-md font-medium text-[#BABABA]">
              <p>Don't worry, it happens.</p>
              <p>
                You can return to the{" "}
                <Link
                  href="/"
                  className="underline text-[#BABABA] hover:text-white"
                >
                  toppage
                </Link>{" "}
                and keep exploring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
