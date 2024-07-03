import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Offer from "./Offer/Offer";
import Question from "./Question/Question";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Question></Question>
            <Offer></Offer>
        </div>
    );
};

export default Home;