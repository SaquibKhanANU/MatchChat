import { useState } from "react";

interface PaginationData {
  paginationNumbers: number[];
}

const usePagination = (
  postsPerPage: number,
  length: number
): PaginationData => {
  const [paginationNumbers] = useState<number[]>(() => {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
      numbers.push(i);
    }
    return numbers;
  });

  return { paginationNumbers };
};

export default usePagination;
