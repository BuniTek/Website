import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SearchInput from './Input';

import './search.scss';
import { searchContent } from '../../redux/actions/search.action';

const Search = ({ placeholder }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    search: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState, [name]: value,
    }));
    dispatch(searchContent(value));
  };


  return (
    <div className="content__search">
      <SearchInput value={state.search} onChange={onChange} placeholder={placeholder} />
    </div>


  );
};
Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
export default Search;
