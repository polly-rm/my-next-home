import '../../static/style/Common.css';


const Pagination = ({
    nPages,
    currentPage,
    setCurrentPage
}) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }


    return (
        <div className="col-md-12">
            <div className="pull-right">
                <div className="pagination">
                    <ul>
                        <li><a href={void (0)} onClick={prevPage} className="pointer">Prev</a></li>
                        {
                            pageNumbers.map(pgNumber => (
                                <li key={pgNumber} className={`page-item ${currentPage == pgNumber ? 'active' : ''}`}>
                                    <a href={void (0)} onClick={() => setCurrentPage(pgNumber)} className="pointer">{pgNumber}</a>
                                </li>
                            ))
                        }
                        <li><a href={void (0)} onClick={nextPage} className="pointer">Next</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pagination;