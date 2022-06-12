import React from 'react';
import {useSpring, animated} from 'react-spring'
import {FaUser} from 'react-icons/fa'
import {BsFillCreditCardFill} from 'react-icons/bs'
import checkIconMobile from '../../assets/mobile/checkpoint.svg'
const Content = () => {
    const customer = useSpring({customers: 10245, from:{customers:0}})
    const cardIssued = useSpring({cards: 12045, from:{cards:0}})

    return (
        <section className="lmd:flex lmd:flex-row lmd:items-center ">
            <div className="lg:w-[30%] lmd:w-[50%] ml-[70px] mr-[54px] text-bold flex-col bg-background2 rounded-[24px] shadow-md flex items-center justify-center">
                <div className="mt-16 flex gap-8 justify-between items-start">
                    <FaUser size={'22px'} className="mt-[12px]"/>
                    <div className="text-[26px]">
                        <animated.div>
                            {customer.customers.to((val)=>Math.floor(val))}
                        </animated.div>
                        <p className="text-[13px] font-semibold mb-[36px]">
                            Customers
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-8 justify-between mb-16 ">
                    <BsFillCreditCardFill size={'22px'} className="mt-[12px]"/>
                    <div className="text-[26px]">
                        <animated.div>
                            {cardIssued.cards.to( (val) => Math.floor(val) )}
                        </animated.div>
                        <p className="text-[13px] font-seimibold">
                            Cards Issued
                        </p>
                    </div>
                </div>
            </div>  
            <div className="text-[13px] flex flex-col w-full mt-[90px] font-semibold  md:text-16 pl-[10%] ">
                <div className='check-content '>
                    <img src={checkIconMobile} alt="" />
                    <p>Card reports sent to your phone every weeks</p>
                </div>
                <div className='check-content'>
                    <img src={checkIconMobile} alt="" />
                    <p>No external fees</p>
                </div>
                <div className='check-content '>
                    <img src={checkIconMobile} alt="" />
                    <p>Set spending limits are restrictions</p>
                </div>
            </div>
        </section>
    );
};

export default Content;