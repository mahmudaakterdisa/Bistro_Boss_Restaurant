import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle'
import MenuItem from '../../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../../Hooks/useMenu';

const MenuCategory = () => {
    const [menu] = useMenu();
    const menuCategory = menu.filter(item => item.category === 'salad');
    return (
        <div className='my-20'>
            <SectionTitle
                heading={"today's offer"}
                subHeading={"don't miss"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menuCategory.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>


        </div>
    );
};

export default MenuCategory;