import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./CardDetail.scss";

const CardDetail = () => {
  let { modeloId } = useParams();

  const [modelo, setModelo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function getList() {
      try {
        const request = await fetch(
          `http://localhost:4000/modelos/${modeloId}`
        );
        const response = await request.json();
        setModelo(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    getList();
  }, [modeloId]);

  if (error) {
    return <>Error: {error}</>;
  } else if (isLoading) {
    return <>Loading...</>;
  } else {
    return (
      <div>
        <div id="fondo-detalle"
          style={{
            backgroundImage: `url(${modelo.foto2})`,
            height: "500px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            alignItems: "center",
          }}
        >
          <div className="imgsobrefondo">
            <h3>{modelo.modelo}</h3>
            <h1>{modelo.titulo}</h1>
            <h3>{modelo.descripcion}</h3>
          </div>
        </div>

        <div>
          <h3 className="h3caracteristicas">{modelo.subtitulo}</h3>

          <ul className="flex-container-caracteristicas">
            {modelo.caracteristicas.map((item) => {
              return (
                <li className="flex-item-caracteristicas" key={item.titulo}>
                  <div className="card">
                    <img className="axis" src={item.img} alt="{item.modelo}" />
                    <h3 className="h3mayusculas">{item.titulo}</h3>
                    <p>{item.descripcion}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

       
        <h3 className="h3caracteristicas">¿Qué versión es para ti?</h3>
        <ul className="flex-container-version">
          {modelo.version.map((item) => {
            return (
              <li className="flex-item-version" key={item.acabado}>
                <div className="flex-precios">
                  <div>
                    <h3 className="h3mayusculas">{item.acabado}</h3>
                  </div>
                  <div>
                    <img className="axis" src={item.img} alt="{item.modelo}" />
                  </div>
                  <div><p>{item.descripcion}</p></div>
                  <div><h4>{item.precio}</h4></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default CardDetail;
