import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './Input';
import Submit from './Submit';

import './search.scss';

const Search = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="content__search" onSubmit={onSubmit}>
      <SearchInput value={value} onChange={onChange} placeholder={placeholder} />
      <Submit value="Search" />
    </form>
  );
};
Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
export default Search;
