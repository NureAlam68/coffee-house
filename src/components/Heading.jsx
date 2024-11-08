import PropTypes from "prop-types";

const Heading = ({title, subtitle}) => {
    return (
        <div className='flex flex-col w-full justify-center items-center mb-[50px]'>
            <h1 className='text-xl md:text-2xl lg:text-5xl font-thin mb-6'>
                {title}
            </h1>
            <p className='text-xs md:text-base text-gray-600 text-center lg:text-[20px] font-thin'>
                {subtitle}
            </p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Heading;