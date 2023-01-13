import React, { useState } from 'react';

interface Props {
  handleFilter: (filter: string) => void;
  filter: any;
}


const FilterInput: React.FC<Props> = ({ handleFilter }) => {
  const [filter, setFilter] = useState<string>('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let exp: RegExp = /[^0-9]/;
    const inputValue = event.target.value.replace(exp, "");
    setFilter(inputValue);
    handleFilter(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by id"
      />
    </div>
  );
};

export default FilterInput;