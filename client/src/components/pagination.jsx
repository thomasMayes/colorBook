import React, { useState } from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  let [currentPage, changePage] = useState(1);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const incrementPage = () => {
    if (currentPage < pageNumbers[pageNumbers.length - 1]) {
      changePage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  const decrementPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  return (
    <div>
      <ul className="pagination">
        <li className="page-link" onClick={() => decrementPage()}>
          previous
        </li>
        {pageNumbers.map((n) => (
          <li key={n} className="page-item">
            <div
              onClick={() => {
                paginate(n);
                changePage(n);
              }}
              className="page-link"
              style={currentPage === n ? { background: "#ccc9c95c" } : null}
            >
              {n}
            </div>
          </li>
        ))}
        <li className="page-link" onClick={() => incrementPage()}>
          next
        </li>
      </ul>
    </div>
  );
};
