import React, { useEffect, useState } from 'react'

const Search = ({onSearch}) => {
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        onSearch(searchText);
    }, [searchText])

  return (
    <div className='text-center my-3'>
      <input
        type="text"
        value={searchText}
        placeholder="Search Country"
        className='border rounded text-center focus:bg-amber-100 p-1'
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  )
}

export default Search
