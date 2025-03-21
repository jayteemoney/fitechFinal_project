
import { Link } from 'react-router-dom';

const Stars = () => {
  return (
    <div className="justify-center flex gap-[10px] mb-2">
      <Link to="/shopping-cart" aria-label="Shopping Cart">
        <i className="fas fa-shopping-cart"></i>
      </Link>
      <Link to="/favorites" aria-label="Favorite">
        <i className="fas fa-heart"></i>
      </Link>
      <Link to="/view-item" aria-label="View Item">
        <i className="fas fa-eye"></i>
      </Link>
    </div>
  );
};

export default Stars;

