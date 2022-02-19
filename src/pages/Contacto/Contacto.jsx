import React, { useState } from "react";
import "./Contacto.scss";

const Contacto = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido:"",
    direccion:"",
    ciudad:"",
    telefono:"",
    email:""
  });

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("Formulario enviado correctamente");
    console.log(datos);
  };

  return (
    <div>
      <h3>¿En qué te podemos ayudar?</h3>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            placeholder="Nombre"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            placeholder="Apellido"
            className="form-control"
            type="text"
            name="apellido"
            onChange={handleInputChange}
          >
          </input>
          </div>
          <div>
          <input
            placeholder="Dirección"
            className="form-control"
            type="text"
            name="direccion"
            onChange={handleInputChange}
          ></input>
          </div>
          <div>
          <input
            placeholder="Ciudad"
            className="form-control"
            type="text"
            name="ciudad"
            onChange={handleInputChange}
          ></input>
          </div>
          <div>
          <input
            placeholder="Telefono"
            className="form-control"
            type="text"
            name="telefono"
            onChange={handleInputChange}
          ></input>
          </div>
          <div>
          <input
            placeholder="Email"
            className="form-control"
            type="text"
            name="email"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btncontacto" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
