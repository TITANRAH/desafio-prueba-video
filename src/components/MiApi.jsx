import Card from "./Card";
import Busqueda from "./Busqueda";
import { useState, useEffect } from "react";
import Footer from "./Footer";


function MiApi() {
  const baseUrl = "https://rickandmortyapi.com/api/character";

  const [respuesta, setRespuesta] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [filtroPorGenero, setFiltroPorGenero] = useState("");

  useEffect(() => {
    const fetchDatos = async () => {
      const resp = await fetch(baseUrl);
      const respDatos = await resp.json();

      setRespuesta(respDatos.results);
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

      console.log(respDatos.results);
      setRespuesta(respDatos.results);
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

      console.log(respDatos.results);
      setRespuesta(respDatos.results);
    };

    fetchDatos();
  }, [filtroPorGenero]);

  // console.log(filtro);
  // console.log("FILTRO POR GENERO", filtroPorGenero);
  return (
    <>

      <Busqueda setFiltro={setFiltro} setFiltroPorGenero={setFiltroPorGenero} />

   
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


            <Footer/>

     
    </>
  );
}

export default MiApi;
