import React from "react";

const Country = (props) => {
  const addCountry = props.add
  const country = props.country
  return (
    <div>
      <h3>{country.name}</h3>
      <p>{country.capital}</p>
      <p>CALL: +{country.callingCodes}</p>
      <button onClick={()=>addCountry(country.name)}>click to add</button>
    </div>
  );
};

export default Country;
