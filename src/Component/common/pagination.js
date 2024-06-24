import React from "react";
import { Pagination } from "react-bootstrap";

export default function MyPagination({
  paginationDetails,
  setPaginationDetails = () => {},
  totalCount = 12,
  darkPagination = false,
}) {
  const { limit = 10, page = 1 } = paginationDetails ?? {};
  const totalPage = Math.ceil(totalCount / limit);

  const handlePage = (page) => {
    if (page < 1 || page > totalPage) return;
    setPaginationDetails((prev) => {
      return {
        ...prev,
        page,
      };
    });
  };

  console.log("darkPagination", darkPagination);

  return (
    <>
      <Pagination className={darkPagination ? "darkPagination" : ""}>
        <Pagination.Prev onClick={() => handlePage(page - 1)} />
        {Array.from({ length: totalPage }).map((_, i) => (
          <Pagination.Item active={i + 1 === page} onClick={() => handlePage(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePage(page + 1)} />
      </Pagination>
    </>
  );
}
