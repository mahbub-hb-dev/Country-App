import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';

const url = "https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,capital,population";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((country) => country.name.common !== name);
    setFilteredCountries(filter);
  }

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  }

  return (
    <div>
      <h1 className='text-3xl text-center font-bold text-fuchsia-700'> Country App </h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error: {error.message}</h2>}
      {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} /> }
    </div>
  );
}

export default App;





















{/* {!isLoading && !error && (
        <ul>
          {countries?.map((c) => (
            <li key={c.cca3 || c.ccn3 || Math.random()}>
              {c.name?.common || "—"} — {c.region || "—"} — {c.capital?.[0] || "—"}
            </li>
          ))}
        </ul>
      )} */}