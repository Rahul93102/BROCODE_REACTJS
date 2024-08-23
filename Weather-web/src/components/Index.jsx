import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";
import { date } from "zod";

const Index = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchdata() {
    if (!search) {
      console.log("No data is not provided.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=eeaae0724f95dc3e2d2f4a3bdf3505ae&units=metric`
      );
      const data = await res.json();

      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        console.log(data);
      }
    } catch (e) {
      console.log("Network error: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  function handlesearch() {
    fetchdata();
  }

  function getdates() {
    return new Date().toLocaleDateString("en-US", {
      day: "numeric",
      weekday: "long",
      month: "long",
      year: "numeric",
    });
  }

  console.log(getdates());
  console.log(weatherData);

  useEffect(() => {
    fetchdata();
  }, [search]);

  return (
    <div>
      <div className="container">
        {loading && <div></div>}
        <div className="suggestions">
          <Suggestion
            handleSearch={handlesearch}
            data={search}
            setdata={setSearch}
          />
        </div>
        <div className="name">
          {weatherData && (
            <div>
              <h1>{weatherData.name}</h1>
            </div>
          )}
        </div>
        <div className="sub-container">
          {weatherData && weatherData.coord ? (
            <div className="longitude">
              <h4>{getdates()}</h4>
              <h4>{weatherData.weather[0].description}</h4>
              <div className="sub-longitude">
                <div className="">
                  <h3>Longitude:{weatherData.coord.lon}</h3>
                </div>
                <div className="">
                  <h3>Latitude:{weatherData.coord.lat}</h3>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <div>
            {weatherData && weatherData.main && (
              <div className="container-main">
                <div className="pressure">
                  <h3>Pressure {weatherData.main.pressure}</h3>
                </div>
                <div className="tempreature">
                  <h3>Tempre {weatherData.main.temp}</h3>
                </div>
                <div className="humidity">
                  <h3>Humdity {weatherData.main.humidity}</h3>
                </div>
                <div className="speed">
                  <h3>Speed {weatherData.wind.speed}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
