import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { Icon } from "leaflet";
import marker from "../icons/marker-icon.png";

function Map() {
  const [worldData, setWorldData] = useState<{
    cases: number;
    deaths: number;
    recovered: number;
  }>({ cases: 0, deaths: 0, recovered: 0 });

  const [countryData, setCountryData] = useState<
    Array<{
      country: string;
      countryInfo: {
        lat: number;
        long: number;
      };
      active: number;
      recovered: number;
      deaths: number;
    }>
  >([]);
  const customMarkerIcon = new Icon({
    iconUrl: marker, // Update with your image path
    iconSize: [20, 20], // Width and height of the icon
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const worldResponse = await axios.get(
          "https://disease.sh/v3/covid-19/all"
        );
        setWorldData(worldResponse.data);

        const countryResponse = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        setCountryData(countryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>COVID-19 Dashboard</h1>

      <div className="stats">
        <h2>Worldwide Statistics</h2>
        <p>Cases: {worldData.cases}</p>
        <p>Deaths: {worldData.deaths}</p>
        <p>Recovered: {worldData.recovered}</p>
      </div>

      <div className="map-container">
        <h2 className="font-semibold text-xl mb-4">Country-wise Statistics</h2>
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {countryData.map((country) => (
            <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customMarkerIcon} // Use the custom marker icon
          >
              <Popup>
                <div>
                  <h3>{country.country}</h3>
                  <p>Active Cases: {country.active}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
