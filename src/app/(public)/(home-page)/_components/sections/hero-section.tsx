export default function HeroSection() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#dee8eb] overflow-x-hidden"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M60 54L60 66M54 60L66 60' stroke='%236B7280' stroke-width='0.5' stroke-opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M15 15L15 0M15 15L30 15M15 15L15 30M15 15L0 15' stroke='%23cccccc' stroke-width='0.5' stroke-opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundPosition: "10px 17px, 0 0",
      }}
    >
      <div className="min-w-screen min-h-screen grid grid-cols-2 grid-rows-3 gap-4 p-30">
        <div className="col-span-2 align-top">
          <h1 className="text-8xl font-bold text-transparent text-outline-black">
            VISION
          </h1>
        </div>
        <div className="row-start-2 grid items-center texts-start">
          <div>
            <h1 className="text-4xl font-semibold text-white bg-black inline-bg px-3 leading-14">
              So for now, it's only me In engineering we trust
            </h1>
          </div>
        </div>
        <div className="row-start-2 grid items-center text-end">
          <div>
            <h1 className="text-4xl font-semibold text-white bg-black inline-bg px-3 leading-14">
              So for now, it's only me, And maybe that's all I need
            </h1>
          </div>
        </div>
        <div className="text-start text-gray-500">
          <p className="max-w-1/2 font-medium text-xs">
            Bahwa aku pernah dicintai, Seada-adanya, Sekurang-kurangnya
          </p>
        </div>
      </div>
    </div>
  );
}
