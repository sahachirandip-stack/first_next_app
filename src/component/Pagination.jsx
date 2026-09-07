import Link from "next/link";

const Pagination = ({ currentPage, totalPages, basePath }) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
  const pages = [];

  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  // First 2 pages
  pages.push(1, 2);

  // Ellipsis after first 2
  if (currentPage > 4) {
    pages.push("...");
  }

  // Pages around current page
  const start = Math.max(3, currentPage - 1);
  const end = Math.min(totalPages - 2, currentPage + 1);

  for (let i = start; i <= end; i++) {
    // Avoid duplicate pages
    if (!pages.includes(i)) {
      pages.push(i);
    }
  }

  // Ellipsis before last 2
  if (currentPage < totalPages - 3) {
    pages.push("...");
  }

  // Last 2 pages
  pages.push(totalPages - 1, totalPages);

  return pages;
};

const pages = getPages();

  return (
    <nav aria-label="Blog pagination">
      <ul className="pagination justify-content-center">

        {/* Previous */}
        <li
          className={`page-item ${
            currentPage === 1 ? "disabled" : ""
          }`}
        >
          <Link
            href={
              currentPage > 1
                ? `${basePath}?page=${currentPage - 1}`
                : "#"
            }
            className="page-link"
          >
            ← Previous
          </Link>
        </li>

        {/* Pages */}
        {pages.map((page, index) => (
          <li
            key={`${page}-${index}`}
            className={`page-item ${
              page === currentPage ? "active" : ""
            } ${page === "..." ? "disabled" : ""}`}
          >
            {page === "..." ? (
              <span className="page-link">...</span>
            ) : (
              <Link
                href={`${basePath}?page=${page}`}
                className="page-link"
              >
                {page}
              </Link>
            )}
          </li>
        ))}

        {/* Next */}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <Link
            href={
              currentPage < totalPages
                ? `${basePath}?page=${currentPage + 1}`
                : "#"
            }
            className="page-link"
          >
            Next →
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Pagination;