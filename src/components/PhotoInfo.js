import React, { useState, useEffect } from "react";

import styled from "styled-components";

const StyledInfo = styled.div`
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.secondaryColor};
  border: 6px solid ${pr => pr.theme.border};
`


const PhotoInfo = (props) => {
    const { photo } = props

  return (
    <StyledInfo>
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
    </StyledInfo>
  );
}

export default PhotoInfo;