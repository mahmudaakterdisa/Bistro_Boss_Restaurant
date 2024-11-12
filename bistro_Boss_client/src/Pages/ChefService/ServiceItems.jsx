const ServiceItems = ({ item, recipe, customColor, customTextColor }) => {
    return (
        <div className={`${customTextColor} py-32 px-40 text-center`}>
            <div className={`${customColor} opacity-70 py-10 px-10`}>
                <h3 className="text-2xl font-semibold">{item}</h3>
                <p className="text-sm">{recipe}</p>
            </div>


        </div>
    );
};

export default ServiceItems;