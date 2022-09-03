import Card from "./Card";
import Busqueda from "./Busqueda";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import BotonOrden from "./BotonOrden";
import NoHayResultados from "./NoHayResultados";

function MiApi() {
  const baseUrl = "https://rickandmortyapi.com/api/character";

  const [respuesta, setRespuesta] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [filtroPorGenero, setFiltroPorGenero] = useState("");
  const [ordenAz, setOrdenAz] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
      const resp = await fetch(baseUrl);
      const respDatos = await resp.json();

      setRespuesta(respDatos.results);
      setOrdenAz(respDatos.results);
    };

    fetchDatos();
  }, []);

  useEffect(() => {
    const fetchDatos = async () => {
      let urlFiltro = baseUrl;

      if (filtro !== "") {
        urlFiltro = baseUrl + "?name=" + filtro;
      }

      const resp = await fetch(urlFiltro);
      const respDatos = await resp.json();

      setRespuesta(respDatos.results ? respDatos.results : []);
    };

    fetchDatos();
  }, [filtro]);

  useEffect(() => {
    const fetchDatos = async () => {
      let urlFiltro = baseUrl;

      if (filtroPorGenero !== "") {
        urlFiltro = baseUrl + "?gender=" + filtroPorGenero;
      }

      const resp = await fetch(urlFiltro);
      const respDatos = await resp.json();

      setRespuesta(respDatos.results ? respDatos.results : []);
    };

    fetchDatos();
  }, [filtroPorGenero]);

  return (
    <>
      <BotonOrden setRespuesta={setRespuesta} ordenAz={ordenAz} />

      <Busqueda setFiltro={setFiltro} setFiltroPorGenero={setFiltroPorGenero} />

      {respuesta.length > 0 ? (
        <div className="contenedor-card">
          {respuesta.map(
            ({ name, url, image, id, gender, status, created, species }) => (
              <Card
                url={url}
                key={id}
                imagen={image}
                name={name}
                genero={gender}
                status={status}
                created={created}
                species={species}
              />
            )
          )}
        </div>
      ) : (
        <NoHayResultados/>
      )}

      <Footer />
    </>
  );
}

export default MiApi;
