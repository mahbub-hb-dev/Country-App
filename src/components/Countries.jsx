import React from 'react'

import { v4 as uuidv4 } from 'uuid';
import Country from './Country';

const Countries = (props) => {
  return (
    <section className='p-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-[115px]'>
      {props.countries.map((country) => {
        const countryNew = {country, id: uuidv4()};

        return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry} />
      })}
    </section>
  )
}

export default Countries
