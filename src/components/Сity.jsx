import React from "react";
import Footer from "./Footer"; 

function City({ playlistUrl }) {
  return (
    <div className="side">
      <iframe title="uniq" className="rapper__name" src={playlistUrl}></iframe>
      <Footer />
    </div>
  );
}

export default City;
