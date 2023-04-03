import React from "react";
import image1 from "./assets/image-hero-desktop.png";
import image2 from "./assets/image-hero-mobile.png";

function Image() {
  return (
    <div className="image-box">
      <picture>
        <source
          width={450}
          height={350}
          srcset={image2}
          media="(max-width: 500px)"
        />

        <source
          width={400}
          height={550}
          srcset={image1}
          media="(max-width: 1500px)"
        ></source>
        <img width={400} height={550} src={image1} alt="random image"></img>
      </picture>
    </div>
  );
}

export default Image;
