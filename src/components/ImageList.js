import React from "react";
import imageList from "./imageList.css";

import ImageCard from "./ImageCard";

function ImageList(props) {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
}
export default ImageList;
