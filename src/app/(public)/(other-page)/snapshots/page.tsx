import SnapshotSection from "./_components/section/snapshot-section";

export default function Snapshots() {

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
        <div className="absolute bg-[#004729] top-[15%] left-1/2 -translate-x-1/2 w-150 h-150 rounded-full opacity-50 blur-[120px]" />
        <div className="absolute bg-[#20033D] bottom-0 left-[10%] w-150 h-150 rounded-full opacity-50 blur-[120px]" />
        <div
          className="absolute bg-[#00076B] bottom-0 right-[10%] w-150 h-150 rounded-full opacity-50 blur-[120px]"
          style={{ background: "#00076B" }}
        />
      </div>

      <div className="relative z-10 pt-40 md:pt-60 mx-6 md:mx-10 lg:mx-21 px-2 md:px-8 lg:px-14">
        <SnapshotSection/>
      </div>
    </>
  );
}
