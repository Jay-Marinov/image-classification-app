import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const ImageClassification = () => {
  const { result, imgURL, setImgRef } = useGlobalContext();

  const imageRef = useRef();

  useEffect(() => {
    setImgRef(imageRef);
  }, [imgURL]);

  return (
    <section className="imageClassification-section">
      <h3>Image classification</h3>
      <div className="underline"></div>
      <div className="imageResult">
        <div className="image">
          {imgURL ? (
            <div className="img-container">
              <img
                src={imgURL}
                alt="Image"
                className="main-img"
                crossOrigin="anonymous"
                ref={imageRef}
              />
            </div>
          ) : (
            <div className="url-loader">
              <h4>Waiting for image URL</h4>
              <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>
        {result.length > 0 && (
          <div className="result">
            <h4>It might be:</h4>
            {result.map((result, index) => {
              return (
                <div key={index}>
                  <h5>{result.className}</h5>
                  <p>{`Probability: ${(result.probability * 100).toFixed(
                    2
                  )}%`}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageClassification;
