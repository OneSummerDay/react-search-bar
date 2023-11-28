import React from 'react'

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInput">
        <input type="text" />
        <div className="seacrhIcon"></div>
      </div>
      <div className="dataResult"></div>
    </div>
  )
}

export default SearchBar
