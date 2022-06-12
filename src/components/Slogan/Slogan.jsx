import React from 'react';
import Cards from '../../assets/desktop/isocard.svg'
const Slogan = () => {
    return (
        <section className='text-[36px] my-14 font-extrabold md:my-28 lmd:grid  md:text-48 lmd:grid-cols-3 lmd:items-center relative'>
            <div className='text-center lmd:col-span-1 lmd:col-start-2'>
                <p>
                    Earn <span className='dark:text-[#CAACFF] text-[#5D0096] '>More</span>
                </p>
                <p>
                    Pay Less
                </p>
                <button className="text-white text-[20px] px-6 py-[6px] font-bold mt-[27px] rounded-[14px] hover:bg-[#AD26FF] bg-[#6849CD] transition-ease duration-300 md:text-25 md:px-8 md:py-[8px]">
                    Start
                </button>
            </div>
            <div className="mt-[69px] lmd:absolute md:right-[-5rem] md:flex md:justify-center">
                <img src={Cards} alt="credit_card"  />
            </div>       
        </section>
    );
};

export default Slogan;