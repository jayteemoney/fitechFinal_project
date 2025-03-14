import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

function Brands() {
  return (
    <div className="text-white flex gap-4 mt-4 text-lg">
      <Link to="#" className="hover:text-blue-400 transition">
        <FaFacebookF />
      </Link>
      <Link to="#" className="hover:text-blue-400 transition">
        <FaTwitter />
      </Link>
      <Link to="#" className="hover:text-pink-400 transition">
        <FaInstagram />
      </Link>
      <Link to="#" className="hover:text-black transition">
        <FaTiktok />
      </Link>
    </div>
  );
}

export default Brands;
