
import { Link } from 'react-router-dom';
import './Navbar.css'; // Puedes agregar estilos personalizados aquí.

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/sales" className="navbar-link">Sales</Link>
        </li>
        <li className="navbar-item">
          <Link to="/resultadosBusqueda " className="navbar-link">Resultados búsqueda</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
