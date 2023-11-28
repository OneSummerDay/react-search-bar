import React from 'react'
import './SearchBar.css'

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInput">
        <input type="text" placeholder={placeholder} />
        <div className="seacrhIcon"></div>
      </div>
      <div className="dataResult"></div>
    </div>
  )
}

export default SearchBar
