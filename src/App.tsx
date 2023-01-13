import React, { useState, useEffect } from 'react';
import FilterInput from './components/FilterInput';
import ProductModal from './components/ProductModal';
import { ProductTable, Pagination } from './components/ProductTable';
import axios from 'axios';

const App: React.FC = () => {
  const [products, setProducts] = useState([] as any[]);
  const [filteredProducts, setFilteredProducts] = useState([] as any[]);
  const [selectedProductId, setSelectedProductId] = useState<null | number>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState('' as any);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://reqres.in/api/products');
        setProducts(result.data.data);
        setFilteredProducts(result.data.data);
        setTotalPages(Math.ceil(result.data.data.length / perPage));
      } catch (error) {
        alert("Error fetching data. ");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (filter !== '') {
      setFilteredProducts(
        products.filter(product => product.id.toString().startsWith(filter))
      );
    } else {
      setFilteredProducts(products);
    }
    setCurrentPage(1);
  }, [filter, products]);

  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  const handleRowClick = (id: number) => {
    setSelectedProductId(id as number);
  };

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement>, page: number) => {
    setCurrentPage(page);
  };

  const handleCloseModal = () => {
    setSelectedProductId(null);
  };

  return (
    <div>
      <FilterInput handleFilter={handleFilter} filter={filter} />
      <ProductTable
        products={filteredProducts.slice(
          (currentPage - 1) * perPage,
          currentPage * perPage
        )}
        onRowClick={handleRowClick}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
      {selectedProductId && (
        <ProductModal
          product={filteredProducts.find(
            product => product.id === selectedProductId
          )}
          isOpen
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
