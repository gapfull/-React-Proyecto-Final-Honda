import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./BlogDetail.scss";

const BlogDetail = () => {
  let { contentId } = useParams();

  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getList() {
      try {
        const request = await fetch(`http://localhost:4000/blog/${contentId}`);
        // const request = await fetch(`http://localhost:4000/blog/2`);
        const response = await request.json();
        setContent(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    getList();
  }, [contentId]);

  if (error) {
    return <>Error: {error}</>;
  } else if (isLoading) {
    return <><br />Content Loading...</>;
  } else {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${content.foto})`,
            height: "500px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            alignItems: "center",

          }}
        >
          <div className="imgsobrefondo-blog">
            <h5>{content.categoria}</h5>
            <h1>{content.titulo}</h1>
            <h5>{content.fecha}</h5>
          </div>
        </div>
        <p className="pblog">{content.descripcion}</p>
      </div>
    );
  }
};

export default BlogDetail;
