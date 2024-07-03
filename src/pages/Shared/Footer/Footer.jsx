import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from '../../../assets/Media/logo light.png'

const Footer = () => {
    return (
        <footer className="bg-[#020043] text-white py-32">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8">
                    <div>
                        <img src={logo} alt="" />
                        <address className="not-italic my-6">
                            123 Main Street Anytown, USA <br />
                            Postal Code: 12345
                        </address>
                        <p>Support: support@oyolloo.com</p>
                        <p>(Available : 10:00am to 07:00pm)</p>
                    </div>
                   
                   <div className="flex flex-col justify-end md:items-center">
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Success Page</a></li>
                            <li><a href="#" className="hover:underline">Terms And Condition</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-end md:items-center">
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">Scheduling</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Patient Portal</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-end">
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-2xl hover:text-gray-400"><FaFacebook /></a>
                            <a href="#" className="text-2xl hover:text-gray-400"><FaInstagram /></a>
                            <a href="#" className="text-2xl hover:text-gray-400"><FaLinkedin /></a>
                            <a href="#" className="text-2xl hover:text-gray-400"><FaYoutube /></a>
                        </div>
                        <p className="mt-6">@Docplus 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
