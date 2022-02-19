import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel";

import "./Banner.scss";

const Banner = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getList() {
      try {
        const request = await fetch("http://localhost:4000/banner");
        const response = await request.json();
        setList(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    getList();
  }, []);

  if (error) {
    return <>Error: {error}</>;
  } else if (isLoading) {
    return <><br/>Carousel loading ...</>;
  } else {
    return (
      <>
        <div className="carousel">
          <Carousel>
            {list.map((item) => {
              return <img key={item.id} src={item.foto} alt="" />;
            })}
          </Carousel>
        </div>

        {/* <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                <div
                  style={{
                    backgroundImage: `url(${item.foto})`,
                    height: "500px",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    alignItems: "center",
                  }}
                >
                  <h1> HELLO </h1>
                </div>

                {item.id}
                {item.modelo}
              </li>
            );
          })}
        </ul> */}
      </>
    );
  }
};

export default Banner;

// import React from 'react';
// import Carousel from 'nuka-carousel';

// const Banner = () => {
//     return (
//       <Carousel>
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" alt=""/>
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" alt=""/>
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" alt=""/>
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" alt=""/>
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" alt=""/>
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" alt=""/>
//       </Carousel>
//     );
//   };

//   export default Banner;
