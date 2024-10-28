import React, { useEffect, useState } from "react";

const CountryApi = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-danger">Countries</h1>
      <div className="row">
        {countries.map((country) => (
          <div className="col-md-4" key={country.cca3}>
            <div className="card mt-3">
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">Capital: {country.capital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryApi;
