import { useEffect } from "react";
import { useState } from "react";
import Country from "./components/Country/Country.js";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`./countries.json`)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const addCountry = (country) => {
    console.log("Country added",country);
  };

  return (
    <div className="allCountriesDiv">
      <h3>Total Country : {countries.length} </h3>
      {countries.map((country) => (
        <Country add={addCountry} country={country} key={country.alpha3Code}></Country>
      ))}
    </div>
  );
}

export default App;
