import ServiceItems from "./ServiceItems";
import './ChefService.css'

const ChefService = () => {
    return (
        <div className="my-20  chef-services">
            <ServiceItems
                customColor={'bg-slate-100 '}
                customTextColor={'text-black'}
                item={'Bistro Hot Menu'}
                recipe={' This Seafood Menu includes all commercially captured or farmed freshwater and saltwater fish, molluscan shellfish, and crustaceans. Molluscan shellfish (or mollusks) and crustaceans (shrimp, lobster, and crayfish) are both commonly referred to as shellfish.'}
            ></ServiceItems>
        </div>
    );
};

export default ChefService;