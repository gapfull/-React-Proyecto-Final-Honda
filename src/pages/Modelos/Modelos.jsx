import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Modelos.scss";

const Modelos = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getList() {
      try {
        const request = await fetch("http://localhost:4000/modelos");
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
    return (
      <>
        <br />
        Item Loading...
      </>
    );
  } else {
    return (
      <>
        <ul className="flex-container-model">
          {list.map((item) => {
            return (
              <li className="flex-item-model" key={item.id}>
                <Link to={"../modelo/" + item.id}>
                  <div
                    style={{
                      backgroundImage: `url(${item.foto2})`,
                      height: "100%",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "50% 50%",
                      borderRadius: "5px",
                      alignItems: "center",
                    }}
                  >
                    <h1>{item.modelo}</h1>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Modelos;
