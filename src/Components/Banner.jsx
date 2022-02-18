import React, { useState, useEffect,} from "react";
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
    return <>Loading...</>;
  } else {
    return (
      <>
        <div>Banner</div>
        <ul>
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




                  }}
                >
                  <h1> HELLO </h1>
                </div>

                {item.id}
                {item.modelo}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Banner;
