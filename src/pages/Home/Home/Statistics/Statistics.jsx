import pie from '../../../../assets/Media/pie.png'
import certificate from '../../../../assets/Media/certificate.png'
import star from '../../../../assets/Media/star.png'
import group from '../../../../assets/Media/Group 7.png'
import coin from '../../../../assets/Media/coin.png'
import video from '../../../../assets/Media/video.png'


const Statistics = () => {
    return (
        <div className="my-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="bg-white p-6 rounded-3xl shadow-lg col-span-1 w-full border">
                        <div className="text-4xl font-bold text-[#020043]">90%</div>
                        <p className="mt-2 text-[#020043]">Patient satisfaction rate, reflecting our commitment.</p>
                        <div className='flex justify-center items-center mt-6'>
                            <img src={pie} alt="" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 p-4">Comprehensive Care <br /> for Every Patient</h1>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-[#FFFFF5] p-4 rounded-3xl shadow-lg text-[#020043] lg:h-[190px] border">
                                <div className="text-2xl lg:text-4xl font-bold">500+</div>
                                <p className="mt-2 text-gray-600">Board-certified <br /> doctors</p>
                                <div className='flex justify-end lg:-mt-4 lg:mr-2'>
                                    <img src={certificate} alt="" />
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-lg text-center lg:h-[162px] mt-7 border">
                                <div className="flex items-center gap-3 text-2xl lg:text-4xl font-bold text-[#020043]">4.8 <img src={star} alt="" /></div>
                                <p className="my-2 text-[#020043]">Over 20,000 Patient</p>
                                <img src={group} alt="" />
                            </div>
                            <div className="bg-[#FFFFF5] text-[#020043] p-6 rounded-3xl shadow-lg lg:h-[190px] border">
                                <div className="text-2xl lg:text-4xl font-bold">$5000</div>
                                <p className="mt-2">Money spend for poor patient</p>
                                <div className='flex justify-end lg:-mt-4 lg:mr-2'>
                                    <img src={coin} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl text-[#020043] shadow-lg border">
                        <div>
                            <div className="text-4xl font-bold">50+</div>
                            <p className="mt-2">Free lesson video for patient</p>
                            <div className='mt-8 flex justify-center items-center'>
                                <img src={video} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;