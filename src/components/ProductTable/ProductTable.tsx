import React from 'react';
import styled from 'styled-components';

interface Props {
  products: Array<{ id: number; name: string; year: number; color: string }>;
  onRowClick: (id: number) => void;
}

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;
  min-width: 650px;
  border-collapse: collapse;
  text-align: left;
`;

const TableHead = styled.thead`
  font-weight: bold;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  cursor: pointer;
  background-color: ${props => props.color};
`;

const TableCell = styled.td``;

const ProductTable: React.FC<Props> = ({ products, onRowClick }) => {
  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableRow
              key={product.id}
              color={product.color}
              onClick={() => onRowClick(product.id)}
            >
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
};

export default ProductTable;
