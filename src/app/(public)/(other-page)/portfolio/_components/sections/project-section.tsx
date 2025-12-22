import CardPortfolio from "./project-section/card-portfolio";
import NavigationCategoryPortfolio from "./project-section/navigation-category-portfolio";

export default function ProjectSection() {
  return (
    <div className="">
      <div>
        <h2 className="text-white font-acumin font-bold text-7xl">Portfolio</h2>
      </div>
      <div className="flex gap-24">
        <NavigationCategoryPortfolio />
        <div className="flex-6">
          <div className="grid grid-cols-2 grid-rows-1 gap-x-8 gap-y-12">
            <CardPortfolio />
          </div>
        </div>
      </div>

      {/* paginate */}
      <div className="pt-20 pb-28 flex justify-center">
        <span className="text-white">1</span>
      </div>
    </div>
  );
}
