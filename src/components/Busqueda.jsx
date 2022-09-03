function Busqueda({ setFiltroPorGenero, setFiltro }) {
  return (
    <>
      <div className="busqueda">
        <br />
        <label htmlFor="name">Buscar por Nombre:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          onChange={(e) => setFiltro(e.target.value)}
        />
        <br />
        <label htmlFor="name">Buscar por Género (Male o Female):</label>
        <input
          type="text"
          name="genero"
          className="form-control"
          placeholder="Género"
          onChange={(e) => setFiltroPorGenero(e.target.value)}
        />

        <br />
      </div>
    </>
  );
}

export default Busqueda;
