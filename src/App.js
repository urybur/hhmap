import React, { useState, useCallback } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import City from "./components/Сity.jsx";
import cities from "./cities.js";

import "./App.css";

const defaultState = { center: [56.641311, 47.871342], zoom: 5 };

function App() {
  const [currentCityUrl, setCurrentCityUrl] = useState(cities[0].playlistUrl);

  const handlePlacemarkClick = useCallback((nextPlaylistUrl) => {
    setCurrentCityUrl(nextPlaylistUrl);
  }, []);

  return (
    <div className="main">
      <City playlistUrl={currentCityUrl} />
      <div className="map__wrapper">
        <YMaps query={{ apikey: "96cd6b28-28ae-4792-bbec-db27331eb165" }}>
          <Map className="map" defaultState={defaultState}>
            {cities.map(({ id, placemark, playlistUrl }) => (
              <Placemark key={id} {...placemark} onClick={() => handlePlacemarkClick(playlistUrl)} />
            ))}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default App;
