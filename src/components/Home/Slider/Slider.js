import '../../../static/style/Slider.css';

const Slider = () => {

    return (
        <div className="slider-area slider-area-height">
            <div className="slider">
                <div id="bg-slider" className="owl-carousel owl-theme">
                    <div className="item"><img src="assets/img/slide1/slider-image-1.jpg" alt="GTA V" /></div>
                    <div className="item"><img src="assets/img/slide1/slider-image-2.jpg" alt="The Last of us" /></div>
                    <div className="item"><img src="assets/img/slide1/slider-image-1.jpg" alt="GTA V" /></div>
                </div>
            </div>
            <div className="slider-content">
                <div className="row">
                    <div >
                        <h2>Property Searching Just Got So Easy</h2>
                        <p>Find your dream home and make an offer to its owner or publish your own property for sale with just a few clicks!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;