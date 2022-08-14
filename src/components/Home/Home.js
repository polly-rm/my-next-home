import PropertyArea from "./PropertyArea/PropertyArea";
import SaleArea from "./SaleArea/SaleArea";
import WelcomeArea from "./WelcomeArea/WelcomeArea";
import Slider from "./Slider/Slider";
import CountArea from "./CountArea/CountArea";
import CommentsArea from "./CommentsArea/CommentsArea";

const Home = ({properties}) => {
    return (
        <div>
            <Slider />
            <WelcomeArea />
            <PropertyArea properties={properties}/>
            <CommentsArea />
        </div>
    );
}

export default Home;