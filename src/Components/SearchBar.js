import React, { useState } from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search'

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([])
  return (
    <div className="search">
      <div className="searchInput">
        <input type="text" placeholder={placeholder} />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {data.map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar
