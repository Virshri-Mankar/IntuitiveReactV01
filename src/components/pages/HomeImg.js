import React from 'react';
import aboutUsS1 from "../images/aboutUsS1.jpg";

function HomeImg() {
  return (
    <div>
    <img src={aboutUsS1} alt="About INTUITIVE"  className="mh-100 mw-100 lazy-img img-fluid" loading="lazy" />
    </div>
  )
}

export default HomeImg
