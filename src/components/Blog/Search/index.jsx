import React, { useState } from 'react';
import BlogSearchInput from './Input';
import Submit from './Submit';

import './search.scss';

const BlogSearch = () => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="blog__search" onSubmit={onSubmit}>
      <BlogSearchInput value={value} onChange={onChange} placeholder="Search" />
      <Submit value="Search" />
    </form>
  );
};

export default BlogSearch;
