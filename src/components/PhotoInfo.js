import React, { useState, useEffect } from "react";
import { API_KEY } from "../constants/index";
import axios from "axios";

const PhotoInfo = (props) => {
    const { photo } = props

  return (
    <div className="photo-info">
        <div className="photo-title">
          <h3>{photo.title}</h3>
        </div>
        <div div className="photo-description">
          {photo.explanation}
        </div>
        <div className="author">
          <p className="url"><b>URL:</b> {photo.hdurl}</p>
          <p className="copyright"><b>Copyright:</b> {photo.copyright}</p>
        </div>
      </div>
  );
}

export default PhotoInfo;