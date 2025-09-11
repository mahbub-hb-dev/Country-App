import React from 'react'

const Country = (props) => {
    const {name, flags, capital, population, region} = props.country;
    
    const handleRemove = (name) => {
        props.onRemoveCountry(name);
    }

  return (
    <article className='px-7 h-full py-3 bg-cyan-950 rounded-lg hover:scale-105 transition transition-all'>
        <div>
            <img className='w-[250px] h-[130px] mb-1 block mx-auto' src={flags.png} alt={name.common} />
            <div className='w-[250px] mx-auto'>
              <h3> Name : {name.common} </h3>
              <h3> Population : {population} </h3>
              <h3> Capital : {capital} </h3>
              <h3> Area : {region} </h3>
              <button onClick={() => handleRemove(name.common)} className='border px-3 py-1 mt-2 font-bold text-white hover:bg-amber-300 hover:text-black cursor-pointer rounded-md'> Remove </button>
            </div>
        </div>
    </article>
  )
}

export default Country
