import React from 'react';
import styled from 'styled-components';

interface Props {
  product: Product;
  isOpen: boolean;
  handleCloseModal: () => void;
}

interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  boarder: 2px;
`;

const ModalTitle = styled.h2`
  margin-bottom: 10px;
`;

const ProductModal: React.FC<Props> = ({ product, isOpen, handleCloseModal }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalTitle>{product.name}</ModalTitle>
      <p>ID: {product.id}</p>
      <p>Year: {product.year}</p>
      <p>Color: {product.color}</p>
      <p>Pantone value: {product.pantone_value}</p>
      <button onClick={handleCloseModal}>Close</button>
    </ModalContainer>
  );
};

export default ProductModal;
