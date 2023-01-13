import React from 'react';
import styled from 'styled-components';

interface Props {
  currentPage: number;
  totalPages: number;
  handlePageChange: (e: React.MouseEvent<HTMLButtonElement>, value: number) => void;
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Pagination: React.FC<Props> = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={(e) => {
          if (currentPage > 1) {
            handlePageChange(e, currentPage - 1);
          }
        }}
        disabled={currentPage === 1}
      >
        Previous
      </PaginationButton>
      <PaginationButton
        onClick={(e) => {
          if (currentPage < totalPages) {
            handlePageChange(e, currentPage + 1);
          }
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
