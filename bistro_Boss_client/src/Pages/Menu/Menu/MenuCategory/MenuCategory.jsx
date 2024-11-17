import MenuItem from '../../../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ categoryItem }) => {
    return (
        <div className='my-20'>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    categoryItem.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className='flex justify-center mt-6'>
                <button class="btn btn-outline border-0 border-b-4 mt-5 text-xl">Order Your Favorite Food</button>
            </div>


        </div>
    );
};

export default MenuCategory;