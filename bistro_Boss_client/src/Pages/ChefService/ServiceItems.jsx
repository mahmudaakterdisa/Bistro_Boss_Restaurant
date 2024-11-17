const ServiceItems = ({ item, recipe, customColor, customTextColor, img }) => {
    return (
        <div className={`${customTextColor} py-32 px-40 text-center`}
            style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
        >
            <div className={`${customColor} opacity-70 py-10 px-10`}>
                <h3 className="text-4xl font-thin uppercase">{item}</h3>
                <p className="text-sm py-5">{recipe}</p>
            </div>


        </div>
    );
};

export default ServiceItems;