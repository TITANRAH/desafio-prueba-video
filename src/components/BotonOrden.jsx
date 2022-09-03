function BotonOrden({setRespuesta, ordenAz}) {
  return (
    <>

    <div className="boton-orden mt-5">
    <h3>Ordena los personajes Alfabéticamente</h3>
      <button
        className="btn btn-success"
        onClick={() => setRespuesta(ordenAz.sort((a, b) => a.name.localeCompare(b.name)))}> A - Z </button>
    </div>
    </>
  );
}

export default BotonOrden
