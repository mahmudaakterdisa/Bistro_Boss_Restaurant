import { Helmet } from 'react-helmet-async';
import MenuCover from '../../../Shared/MenuCover/MenuCover';
import PopularMenu from '../../PopularMenu/PopularMenu';
import MenuCategory from './MenuCategory/MenuCategory';
import useMenu from '../../../Hooks/useMenu';
import ServiceItems from '../../ChefService/ServiceItems';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === ' pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <MenuCover
                img={'https://i.ibb.co/98YCM6h/banner3.jpg'}
                title={'our menu'}
                subTitle={'would you like to try a dish?'}
            ></MenuCover>
            <SectionTitle
                heading={"today's offer"}
                subHeading={"don't miss"}
            ></SectionTitle>
            <MenuCategory categoryItem={offered}></MenuCategory>
            <ServiceItems
                item={'Dessert'}
                recipe={'Indulge your senses in our decadent dessert collection, crafted to end your meal on a sweet, unforgettable note. From rich, velvety chocolate creations to light, fruity delights, each dessert is a journey of flavor and texture'}
                customColor={'bg-gray-600'}
                customTextColor={'text-white'}
                img={'https://i.ibb.co/0mcLydx/chef-service.jpg'}
            ></ServiceItems>
            <MenuCategory categoryItem={dessert}></MenuCategory>
            {/* <PopularMenu></PopularMenu>
            <PopularMenu></PopularMenu>
            <PopularMenu></PopularMenu> */}
        </div>

    );
};

export default Menu;