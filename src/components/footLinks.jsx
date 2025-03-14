
import { Link } from "react-router-dom";

function FootLinks() {
  return (
    <footer className="bg-red-950 text-white py-3">
      <nav className="flex justify-center gap-6 font-bold">
        <Link to="/" className="hover:text-red-700 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-red-700 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-red-700 transition">
          Contact
        </Link>
      </nav>
    </footer>
  );
}

export default FootLinks;

