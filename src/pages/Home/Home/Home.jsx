import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Offer from "./Offer/Offer";
import Question from "./Question/Question";
import Service from "./Service/Service";
import Statistics from "./Statistics/Statistics";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <Statistics></Statistics>
            <AboutUs></AboutUs>
            <Service></Service>
            <Question></Question>
            <Offer></Offer>
        </div>
    );
};

export default Home;