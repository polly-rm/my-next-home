import PropertyArea from "./PropertyArea/PropertyArea";
import SaleArea from "./SaleArea/SaleArea";
import WelcomeArea from "./WelcomeArea/WelcomeArea";
import Slider from "./Slider/Slider";
import CountArea from "./CountArea/CountArea";
import CommentsArea from "./CommentsArea/CommentsArea";
import { PropertyContext } from "../../contexts/PropertyContext";
import { useContext } from "react";

const Home = () => {
    const { properties } = useContext(PropertyContext);

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