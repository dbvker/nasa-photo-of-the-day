import React, { useState, useEffect } from "react";
import { API_KEY } from "../constants/index";
import axios from "axios";

import PhotoInfo from "./PhotoInfo";

const Photo = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchPhoto = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then((res) => {
          setPhoto(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          debugger;
        });
    };

    fetchPhoto();
  }, []);

  return (
    <div className="photo-container">
      <img src={photo.hdurl} alt={photo.explanation} />
      <PhotoInfo photo={photo} />
    </div>
  );
}

export default Photo;