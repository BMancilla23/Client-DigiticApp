import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface PaginationCustomProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // Número de páginas a mostrar a la izquierda y derecha de la página actual
  className?: string;
}

export const PaginationCustom = ({
  totalPages,
  currentPage,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationCustomProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  // Generar las página visibles dinámicamente
  const generatePageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - siblingCount);
    const endPage = Math.min(totalPages, currentPage + siblingCount);

    if (startPage > 2) {
      pages.push("..."); // Ellipsis al inicio
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push("..."); // Ellipsis al final
    }

    if (totalPages > 1) {
      pages.push(totalPages); // La última página siempre visible
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  // className="justify-center lg:justify-end
  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={isFirstPage}
            onClick={() => handleClick(currentPage - 1)}
            href="#"
          />
        </PaginationItem>

        {pageNumbers.map((page, index) => (
          <PaginationItem key={index}>
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => handleClick(Number(page))}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={isLastPage}
            onClick={() => handleClick(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
