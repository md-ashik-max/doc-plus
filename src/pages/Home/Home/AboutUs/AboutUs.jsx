import { GoArrowUpRight } from "react-icons/go";
import aboutImg from '../../../../assets/Media/Rectangle 24.png'

const AboutUs = () => {
    return (
        <div className="my-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                <div className="mt-6">
                    <p className="border-2 px-6 py-2 font-semibold w-36 rounded-3xl bg-[#FFFFF5] text-[#020043] border-[#020043]">Who we are</p>
                    <h2 className="text-4xl text-[#020043] font-semibold my-6">We Help To Get <br /> Soultions</h2>
                    <p>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                    <button className='flex items-center btn bg-[#FFC637] border-2 text-[16px] border-[#FFC637] text-black mt-8'>Appointment <GoArrowUpRight className='text-xl'></GoArrowUpRight></button>
                </div>
                <div className="relative">
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="absolute bottom-0 -ml-24 w-[395px] h-[210px] rounded-[32px] p-8 bg-[#343268] text-white">
                        <h3 className="text-[26px] font-medium mb-4">Our mission is simple</h3>
                        <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;