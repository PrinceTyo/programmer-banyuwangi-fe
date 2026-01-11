import { useQueryStates } from "nuqs";
import { StrapiPagination } from "@/types/strapi/contract/response";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { paginationParamsParser } from "@/config/pagination";

interface PaginationProps {
  pagination: StrapiPagination;
  /** Number of page buttons to show on each side of current page */
  siblingCount?: number;
  /** Number of page buttons to show at the start and end */
  boundaryCount?: number;
}

export function Pagination({
  pagination,
  siblingCount = 1,
  boundaryCount = 1,
}: PaginationProps) {
  const [_, setPagination] = useQueryStates(paginationParamsParser);

  // Generate page numbers to display
  const generatePageNumbers = () => {
    const totalPages = pagination.pageCount;
    const currentPage = pagination.page;

    // Calculate range
    const startPages = Array.from({ length: boundaryCount }, (_, i) => i + 1);
    const endPages = Array.from(
      { length: boundaryCount },
      (_, i) => totalPages - boundaryCount + i + 1
    );

    const siblingsStart = Math.max(
      currentPage - siblingCount,
      boundaryCount + 1
    );
    const siblingsEnd = Math.min(
      currentPage + siblingCount,
      totalPages - boundaryCount
    );

    const items: (number | "ellipsis")[] = [];

    // Add start pages
    startPages.forEach((page) => {
      if (page <= totalPages) items.push(page);
    });

    // Add left ellipsis
    if (siblingsStart > boundaryCount + 2) {
      items.push("ellipsis");
    } else if (siblingsStart === boundaryCount + 2) {
      items.push(boundaryCount + 1);
    }

    // Add sibling pages
    for (let page = siblingsStart; page <= siblingsEnd; page++) {
      if (page > boundaryCount && page <= totalPages - boundaryCount) {
        items.push(page);
      }
    }

    // Add right ellipsis
    if (siblingsEnd < totalPages - boundaryCount - 1) {
      items.push("ellipsis");
    } else if (siblingsEnd === totalPages - boundaryCount - 1) {
      items.push(totalPages - boundaryCount);
    }

    // Add end pages
    endPages.forEach((page) => {
      if (page > boundaryCount && page <= totalPages) items.push(page);
    });

    // Remove duplicates while preserving order
    const uniqueItems: (number | "ellipsis")[] = [];
    let lastItem: number | "ellipsis" | null = null;

    items.forEach((item) => {
      if (item !== lastItem) {
        uniqueItems.push(item);
        lastItem = item;
      }
    });

    return uniqueItems;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="pt-20 pb-28 flex items-center gap-2 justify-center text-[#BABABA]">
      {/* Previous Button */}
      <button
        onClick={() =>
          pagination.page > 1 && setPagination({ page: pagination.page - 1 })
        }
        disabled={pagination.page === 1}
        className={`flex items-center border border-[#BABABA] p-1.5 rounded-xs transition-all hover:bg-[#BABABA] hover:text-white ${
          pagination.page === 1 && "opacity-40 cursor-not-allowed"
        }`}
        aria-label="Previous page"
      >
        <IoIosArrowBack />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((item, index) => {
        if (item === "ellipsis") {
          return (
            <div
              key={`ellipsis-${index}`}
              className="flex items-center px-2 text-xs"
            >
              ...
            </div>
          );
        }

        const isActive = item === pagination.page;

        return (
          <button
            key={item}
            onClick={() => setPagination({ page: item })}
            className={`flex items-center border py-1.5 px-3 rounded-xs text-xs transition-all ${
              isActive
                ? "border-[#BABABA] bg-[#BABABA] text-white"
                : "border-[#BABABA] hover:bg-[#BABABA] hover:text-white"
            }`}
            aria-label={`Go to page ${item}`}
            aria-current={isActive ? "page" : undefined}
          >
            {item}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() =>
          pagination.page < pagination.pageCount &&
          setPagination({ page: pagination.page + 1 })
        }
        disabled={pagination.page === pagination.pageCount}
        className={`flex items-center border border-[#BABABA] p-1.5 rounded-xs transition-all hover:bg-[#BABABA] hover:text-white ${
          pagination.page === pagination.pageCount &&
          "opacity-40 cursor-not-allowed"
        }`}
        aria-label="Next page"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
