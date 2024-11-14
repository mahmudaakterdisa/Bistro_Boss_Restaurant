import { Helmet } from 'react-helmet-async';
import MenuCover from '../../../Shared/MenuCover/MenuCover';
import PopularMenu from '../../PopularMenu/PopularMenu';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
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
            <MenuCategory></MenuCategory>
            <PopularMenu></PopularMenu>
            <PopularMenu></PopularMenu>
            <PopularMenu></PopularMenu>
        </div>

    );
};

export default Menu;