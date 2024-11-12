import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        <div className="my-20 bg-fixed featured-item pt-8">
            <SectionTitle
                subHeading={'check it out'}
                heading={'featured item'}
                headerTextColor={'text-white'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center space-x-10 bg-slate-600 bg-opacity-65 pt-5 pb-10 px-20">
                <div>
                    <img className="w-[300px]" src={featuredImg} alt="featuredImg" />
                </div>
                <div className="justify-center text-white">
                    <h4 className="text-sm">March 20, 2024</h4>
                    <h2 className="uppercase">where can i get some</h2>
                    <p className="text-xs">An order is typically made either by telephone, through the supplier's website or mobile app, or through a third party food ordering service</p>
                    <button class="btn btn-outline border-0 border-b-4 mt-5 text-white">Order Now</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;