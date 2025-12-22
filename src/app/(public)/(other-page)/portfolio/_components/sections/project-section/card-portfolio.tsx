export default function CardPortfolio() {
    return (
      <div className="flex flex-col gap-6">
        <img src="./assets/images/image1.jpg" alt="portfolio" />
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <time
              className="text-white text-sm font-medium whitespace-nowrap font-google"
              dateTime="2025-08-22"
            >
              2025 12.23
            </time>
            <p className="text-[#BABABA] text-xs font-normal font-google text-right wrap-break-word ">
              [Figma, Website, Desktop, Mobile, Unreal Engine, Unity]
            </p>
          </div>
          <h3 className="mt-4 text-white text-lg font-ibm font-bold">
            キャンプに行く時が来た - Yuru Camp。
          </h3>
        </div>
      </div>
    );
}