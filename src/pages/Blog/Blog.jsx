import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Blog.scss";

const Blog = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getList() {
      try {
        const request = await fetch("http://localhost:4000/blog");
        const response = await request.json();
        setContent(response);
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
    return <><br/>Content Loading...</>;
  } else {
    return (
      <>
        <ul className="flex-container-blog">
          {content.map((item) => {
            return (
              <li className="flex-item-blog" key={item.id}>
                <Link to={"../blogdetail/" + item.id}>
                  <div
                    style={{
                      backgroundImage: `url(${item.foto})`,
                      height: "50%",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "50% 50%",
                      borderRadius: "5px",
                      alignItems: "center",
                    }}
                  ></div>

                  <div className="cardblog">
                    <h6>{item.categoria}</h6>
                    <h3>{item.titulo}</h3>
                    <h6>{item.fecha}</h6>
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

export default Blog;
