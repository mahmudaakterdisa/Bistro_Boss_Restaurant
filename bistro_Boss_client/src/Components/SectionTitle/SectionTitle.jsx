import React from 'react';

const SectionTitle = ({ heading, subHeading, headerTextColor }) => {
    console.log(headerTextColor)
    return (
        <div className='uppercase mx-auto text-center mb-10 md:w-3/12'>
            <p className='text-xs text-yellow-400 font-medium py-2'>---{subHeading}---</p>
            <h3 className={`${headerTextColor} text-3xl border-y-2 py-2 `}>{heading}</h3>
        </div>
    );
};

export default SectionTitle;