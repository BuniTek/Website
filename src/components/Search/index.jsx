import React, { useState } from 'react';
import SearchInput from './Input';
import Submit from './Submit';

import './search.scss';

const Search = () => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="content__search" onSubmit={onSubmit}>
      <SearchInput value={value} onChange={onChange} placeholder="Search" />
      <Submit value="Search" />
    </form>
  );
};

export default Search;
