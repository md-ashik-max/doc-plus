import { GoArrowUpRight } from 'react-icons/go';
import img from '../../../../assets/Media/Rectangle 32.png'
import logo from '../../../../assets/Media/logo light.png'

const Offer = () => {
    return (
        <div className='md:h-[470px] bg-cover bg-center rounded-[32px] my-32' style={{ backgroundImage: `url(${img})` }}>
            <div className='h-full w-full bg-gradient-to-r from-[#020043] to-[#02004340] rounded-[32px]'>
                <div className='flex justify-between mx-20'>
                    <div className='mt-32'>
                        <h2 className='text-white text-[40px] font-semibold'>Get Your  <br />
                            First Appointment <br />
                            at 50% Off!</h2>
                        <div className='flex gap-6'>
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