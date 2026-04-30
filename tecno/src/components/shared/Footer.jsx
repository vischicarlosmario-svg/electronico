
const Footer = () => {
  return (
    <section className="bg-warning py-4 text-center">
      <h2 className="bg-warning text-dark">@TODOS LOS DERECHOS RESERVADOS</h2>
      <div>
        <ul className="list-group list-group-horizontal bg-warning py-4 justify-content-center">
          <li href="#" className="list-group-item bg-warning text-dark">AVENTURA</li>
          <li href="#" className="list-group-item bg-warning text-dark">TERROR</li>
          <li href="#" className="list-group-item bg-warning text-dark">FORMULARIO 1</li>
        </ul>
        <ul className="list-group list-group-horizontal bg-warning py-4 justify-content-center">
          <li href="#" className="list-group-item bg-warning text-dark">COMBATE</li>
          <li href="#" className="list-group-item bg-warning text-dark">DEPORTES</li>
          <li href="#" className="list-group-item bg-warning text-dark">FORMULARIO 1</li>
        </ul>
        <ul className="list-group list-group-horizontal bg-warning py-4 justify-content-center">
          <li href="#" className="list-group-item bg-warning text-dark">HISTORIA</li>
          <li href="#" className="list-group-item bg-warning text-dark">CONQUISTA</li>
          <li href="#" className="list-group-item bg-warning text-dark">RETRO</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
//<Footer className="bg-warning text-dark py-4 text-center">
//     <p>&copy;Todos los derechos reservados.</p>
//   </Footer>