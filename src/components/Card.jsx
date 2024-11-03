import PropTypes from "prop-types";

const Card = ({coffee}) => {
    const {id, name, image, category, ingredients, nutrition_info} = coffee;
    return (
        <div>
            {name}
        </div>
    );
};

Card.propTypes = {
    coffee: PropTypes.object
}

export default Card;