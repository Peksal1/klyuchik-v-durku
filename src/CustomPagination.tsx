import React from "react";

interface CustomPaginationProps {
  page: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  page,
  pageSize,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPaginationItems = () => {
    const items: JSX.Element[] = [];

    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <li
          key={i}
          className={`page-item ${i === page ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }

    return items;
  };

  return <ul className="pagination">{renderPaginationItems()}</ul>;
};

export default CustomPagination;
