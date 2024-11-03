import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";

const Card = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();
  const { id, name, image, category, type, popularity, rating } = coffee;
  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-[276px] overflow-hidden">
          <img src={image} className="" alt="" />
        </figure>
        <div className="p-6">
          <h1 className="text-[24px] font-semibold">Name: {name}</h1>
          <p className="text-base mt-2 font-medium">Category: {category}</p>
          <p className="text-base mt-1 font-medium">Type: {type}</p>
          <p className="text-base mt-1 font-medium">Origin: {origin}</p>
          <p className="text-base mt-1 font-medium">Rating: {rating}</p>
          <p className="text-base mt-1 font-medium">Popular: {popularity}</p>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div onClick={()=> handleRemove(id)} className="absolute p-4 bg-warning rounded-full cursor-pointer -top-5 -right-5">
          <IoTrashBin size={20} />
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  coffee: PropTypes.object,
  handleRemove: PropTypes.func
};

export default Card;
