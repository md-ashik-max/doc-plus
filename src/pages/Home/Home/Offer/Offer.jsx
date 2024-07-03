import { GoArrowUpRight } from 'react-icons/go';
import img from '../../../../assets/Media/Rectangle 32.png'
import logo from '../../../../assets/Media/logo light.png'

const Offer = () => {
    return (
        <div className='md:h-[470px] bg-cover bg-center rounded-[32px] my-32' style={{ backgroundImage: `url(${img})` }}>
            <div className='h-full w-full bg-gradient-to-r from-[#020043] to-[#02004340] rounded-[32px]'>
                <div className='flex justify-between mx-6 md:mx-20 py-6'>
                    <div className='md:mt-28'>
                        <div className='space-y-4'>
                            <h2 className='text-white text-2xl md:text-[40px] font-semibold'>Get Your</h2>
                            <h2 className='text-white text-2xl md:text-[40px] font-semibold'>
                                First Appointment</h2>
                            <h2 className='text-white text-2xl md:text-[40px] font-semibold'>
                                at 50% Off!</h2>
                        </div>
                        <div className='md:flex gap-6 space-y-4 md:space-y-0 mt-6'>
                            <button className='flex items-center btn bg-[#FFC637] border-2 text-[16px] border-[#FFC637] text-black'>Appointment <GoArrowUpRight className='text-xl'></GoArrowUpRight></button>
                            <button className='flex items-center btn bg-transparent border-2 text-[16px] border-white text-white'>Learn More<GoArrowUpRight className='text-xl'></GoArrowUpRight></button>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Offer;