import React from "react";

function Picture({ data, setCopied }) {
  // console.log("data :>> ", data);
  return (
    <div className="picture">
      <p className="photographer">{data.photographer}</p>
      <div className="image-container">
        <img src={data.src.large} alt="pic" />
      </div>
      <p className="download">
        <span>
          Download Image:{" "}
          <a href={data.src.large} target="_blank" rel="noreferrer">
            Here
          </a>
        </span>
        <span> | </span>
        <span>
          Copy Link:{" "}
          <span
            className="copy"
            onClick={() => {
              navigator.clipboard.writeText(data.src.large);
              setCopied(true);
            }}
          >
            Click
          </span>
        </span>
      </p>
    </div>
  );
}

export default Picture;
