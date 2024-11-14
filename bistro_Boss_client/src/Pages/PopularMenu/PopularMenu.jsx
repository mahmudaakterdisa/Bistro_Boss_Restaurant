import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular')
    return (
        <section className='my-20'>
            <SectionTitle
                heading={"from our menu"}
                subHeading={"check it out"}
            >
            </SectionTitle>

            <div className='grid grid-cols-2 gap-10'>
                {
                    popularItem.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;