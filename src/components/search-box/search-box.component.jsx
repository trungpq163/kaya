import React from 'react';

import './search-box.styles.scss';

const SearchBox = ({ onChange }) => (
  <input
    type='search'
    className='search-box form-control mr-2'
    placeholder='tìm kiếm!'
    onChange={onChange}
  />
);

export default SearchBox;