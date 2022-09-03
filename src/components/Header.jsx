function Header({ texto, children }) {
  const length = texto.length;
  const totalLetras = 360 / length;

  return (
    <>
      <div className="contenedor-texto-giratorio">
        <div className="spinning-text-wrapper">
          <div className="spinning-text">
            <p className="texto-giratorio">
              {texto.split("").map((letra, i) => (
                <span
                  key={i}
                  style={{
                    transform: `rotate(${totalLetras * i}deg)`,
                  }}
                >
                  {letra}
                </span>
              ))}
            </p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Header;
