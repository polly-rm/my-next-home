const SaleArea = () => {
    return (
        <div className="boy-sale-area">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
                        <div className="asks-first">
                            <div className="asks-first-circle">
                                <span className="fa fa-search"></span>
                            </div>
                            <div className="asks-first-info">
                                <h2>ARE YOU LOOKING FOR A Property?</h2>
                                <p> varius od lio eget conseq uat blandit, lorem auglue comm lodo nisl no us nibh mas lsa</p>
                            </div>
                            <div className="asks-first-arrow">
                                <a href="properties.html"><span className="fa fa-angle-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0">
                        <div className="asks-first">
                            <div className="asks-first-circle">
                                <span className="fa fa-usd"></span>
                            </div>
                            <div className="asks-first-info">
                                <h2>DO YOU WANT TO SELL A Property?</h2>
                                <p> varius od lio eget conseq uat blandit, lorem auglue comm lodo nisl no us nibh mas lsa</p>
                            </div>
                            <div className="asks-first-arrow">
                                <a href="properties.html"><span className="fa fa-angle-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <p className="asks-call">QUESTIONS? CALL US  : <span className="strong"> + 3-123- 424-5700</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleArea;