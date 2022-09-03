import Moment from "react-moment";
import Header from "./Header";

function Card({ name, imagen, genero, status, created, species }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">{name}</h5>
        </div>

        <div className="card-body">
          <img src={imagen} className="card-img-top" alt="Sin Foto" />
        </div>

        <div className="card-footer">
          <p className="card-text">Género: {genero}</p>
          <p className="card-text">Status: {status}</p>
          <p className="card-text">
            Creado el: {""}
            <Moment format="DD/MM/YYYY">{created}</Moment>
          </p>
          <p className="card-text">Especie: {species}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
