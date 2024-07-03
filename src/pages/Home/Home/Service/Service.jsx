import { GoArrowUpRight } from 'react-icons/go';
import serviceImg1 from '../../../../assets/Media/Rectangle 27-2.png'
import serviceImg2 from '../../../../assets/Media/Rectangle 27-1.png'
import serviceImg3 from '../../../../assets/Media/Rectangle 27.png'
const Service = () => {
    return (
        <div className='bg-[#FFFFF5] rounded-xl p-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <p className="border-2 px-6 py-2 font-semibold w-28 rounded-3xl bg-[#FBFBFB] text-[#020043] border-[#020043]">Service</p>
                    <h2 className="text-4xl text-[#020043] font-semibold my-6">Empowering Health, <br /> Enriching Lives</h2>
                    <p>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                    <button className='flex items-center btn bg-[#FFC637] border-2 text-[16px] border-[#FFC637] text-black mt-8'>Appointment <GoArrowUpRight className='text-xl'></GoArrowUpRight></button>
                </div>
                <div className="relative">
                    <div>
                        <img className='rounded-[30px] h-full' src={serviceImg1} alt="" />
                    </div>
                    <div className="absolute bottom-6 ml-6 w-[321px] h-[144px] rounded-[32px] p-4 bg-[#343268CC] text-white">
                        <h3 className="text-[20px] font-medium mb-2">Advanced Technology</h3>
                        <div className='flex items-center'>
                            <p className='text-sm'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <button className='p-2 rounded-full bg-[#FFC637] border-2 text-[16px] border-[#FFC637] text-white mt-8'><GoArrowUpRight className='text-3xl'></GoArrowUpRight></button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
                <div className="relative">
                    <div>
                        <img className='rounded-[30px] h-full' src={serviceImg2} alt="" />
                    </div>
                    <div className="absolute bottom-6 ml-6 w-[321px] h-[144px] rounded-[32px] p-4 bg-[#343268CC] text-white">
                        <h3 className="text-[20px] font-medium mb-2">Online Doctor Meet</h3>
                        <div className='flex items-center'>
                            <p className='text-sm'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <button className='p-2 rounded-full bg-[#FFC637] border-2 text-[16px] border-[#FFC637] text-white mt-8'><GoArrowUpRight className='text-3xl'></GoArrowUpRight></button>
                        </div>

                    </div>
                </div>
                <div className="relative">
                    <div>
                        <img className='rounded-[30px] h-full' src={serviceImg3} alt="" />
                    </div>
                    <div className="absolute bottom-6 ml-6 w-[321px] h-[144px] rounded-[32px] p-4 bg-[#343268CC] text-white">
                        <h3 className="text-[20px] font-medium mb-2">Consultancy your health</h3>
                        <div className='flex items-center'>
                            <p className='text-sm'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <button className='p-2 rounded-full bg-[#FFC637] border-2 text-[16px] border-[#FFC637] text-white mt-8'><GoArrowUpRight className='text-3xl'></GoArrowUpRight></button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;