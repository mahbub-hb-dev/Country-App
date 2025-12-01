import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [searchTxt, setSearchTxt] = useState("");

    const handleChange = (e) => {
        setSearchTxt(e.target.value);
    }

    useEffect(()=>{
        props.onSearch(searchTxt);
    }, [searchTxt])

  return (
    <div className='text-center my-3'>
      <input className='border rounded text-center focus:bg-amber-100 p-1' type="text" placeholder='Search Country' value={searchTxt} onChange={handleChange} />
    </div>
  )
}

export default Search
