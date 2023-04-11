import WelcomeArea from "./WelcomeArea/WelcomeArea";
import Slider from "./Slider/Slider";
import PropertyArea from "./PropertyArea/PropertyArea";


const Home = () => {
    return (
        <div>
            <Slider />
            <WelcomeArea />
            <PropertyArea />
        </div>
    );
}

export default Home;