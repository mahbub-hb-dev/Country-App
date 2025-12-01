import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';

const url = "https://restcountries.com/v3.1/all?fields=name,capital,region,area,population,flags";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setCountries(data);
      setAllCountries(data); // store master data

      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filtered = allCountries.filter((country) => country.name.common !== name);

    setAllCountries(filtered);
    setCountries(filtered);
  };

  const handleSearch = (searchText) => {
    const term = searchText.toLowerCase();

    const filtered = allCountries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(term);
    });

    setCountries(filtered);
  };

  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-50 bg-white border border-b-black'>
        <p className='text-center text-fuchsia-500 text-[12px] font-[500]'> Copyright &copy; Mahbub Hasan Belal </p>
        <h1 className='text-3xl text-center font-bold text-fuchsia-700'> Country Information </h1>
        <Search onSearch={handleSearch} />
      </div>

      {isLoading && <h2 className='text-center mt-[10%] text-xl font-[500]'>Loading...</h2>}
      {error && <h2>Error: {error.message}</h2>}
      {countries && <Countries countries={countries} onRemoveCountry={handleRemoveCountry} /> }
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