import Country from './Country';

const Countries = ({countries, onRemoveCountry}) => {
  return (
    <section className='p-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-[115px]'>
      {countries.map((country) => (
        <Country
          key={country.name.common}
          country={country}
          onRemoveCountry={onRemoveCountry}
        />
      ))}
    </section>
  )
}

export default Countries
