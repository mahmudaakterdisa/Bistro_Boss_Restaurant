import React from 'react';

const MenuItem = ({ item }) => {
    console.log(item)
    console.log(item)
    const { name, image, price, recipe } = item

    return (
        <div className='uppercase flex space-x-5'>
            <img style={{ borderRadius: '0 250px 250px 250px' }} className='w-[80px]' src={image} alt='itemImg' />
            <div>
                <h3>{name}----------</h3>
                <p className='text-xs'>{recipe}</p>


            </div>
            <p className='text-yellow-400 font-medium'>{price}$</p>


        </div>
    );
};

export default MenuItem;