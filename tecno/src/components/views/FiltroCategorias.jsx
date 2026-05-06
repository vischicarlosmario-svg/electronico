const FiltroCategorias = ({ setCategoriaSeleccionada }) => {
  const categorias = [
    "Todos",
    "Accion",
    "Aventura",
    "Shooter",
    "Survival",
    "Sandbox",
    "Ciencia Ficcion"
  ];

  return (
    <div className="filtro-categorias text-center">
      {categorias.map((cat, i) => (
        <button
          key={i}
          className="btn m-2"
          onClick={() => setCategoriaSeleccionada(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FiltroCategorias;