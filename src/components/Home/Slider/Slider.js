const Slider = () => {
    return (
        <div className="slider-area" style={{height: "260px"}}>
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
                        <h2>property Searching Just Got So Easy</h2>
                        <p>Find your dream home and make an offer to its owner or publish your own property for sale with just a few clicks!</p>
                        {/* <div className="search-form wow pulse" data-wow-delay="0.8s">

                            <form action="" className=" form-inline">
                                <button className="btn  toggle-btn" type="button"><i className="fa fa-bars"></i></button>

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Key word" />
                                </div>
                                <div className="form-group">
                                    <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                        <option>Blagoevgrad</option>
                                        <option>Burgas</option>
                                        <option>Varna</option>
                                        <option>Veliko Turnovo</option>
                                        <option>Vidin</option>
                                        <option>Vratsa</option>
                                        <option>Gabrovo</option>
                                        <option>Dobrich</option>
                                        <option>Kurdzhali</option>
                                        <option>Kjustendil</option>
                                        <option>Lovech</option>
                                        <option>Montana</option>
                                        <option>Pazardzhik</option>
                                        <option>Pernik</option>
                                        <option>Pleven</option>
                                        <option>Plovdiv</option>
                                        <option>Razgrad</option>
                                        <option>Ruse</option>
                                        <option>Silistra</option>
                                        <option>Sliven</option>
                                        <option>Smolqn</option>
                                        <option>Sofia</option>
                                        <option>Stara Zagora</option>
                                        <option>Turgovishte</option>
                                        <option>Haskovo</option>
                                        <option>Shumen</option>
                                        <option>Yambol</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select id="basic" className="selectpicker show-tick form-control">
                                        <option> -Status- </option>
                                        <option>Rent </option>
                                        <option>Sale</option>
                                    </select>
                                </div>
                                <button className="btn search-btn" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;