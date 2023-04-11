export const useSorting = (properties) => {
    const sortByDate = (e) => {
        
        if (e.target.parentElement.classList.contains('asc')) {
            properties.sort((a, b) => {
                let da = new Date(a.created_on),
                    db = new Date(b.created_on);
                return db - da;
            });


            e.target.parentElement.classList.remove('asc');
            e.target.parentElement.classList.add('desc');

            e.target.children[0].classList.remove('fa-sort-amount-asc');
            e.target.children[0].classList.add('fa-sort-amount-desc');

        } else if (e.target.parentElement.classList.contains('desc')) {
            properties.sort((a, b) => {
                let da = new Date(a.created_on),
                    db = new Date(b.created_on);
                return da - db;
            });

            e.target.parentElement.classList.remove('desc');
            e.target.parentElement.classList.add('asc');

            e.target.children[0].classList.remove('fa-sort-amount-desc');
            e.target.children[0].classList.add('fa-sort-amount-asc');
        }
    };

    const sortByPrice = (e) => {
        
        if (e.target.parentElement.classList.contains('asc')) {
            properties.sort((a, b) => {
                let da = a.price,
                    db = b.price;
                return db - da;
            });
            
            
            e.target.parentElement.classList.remove('asc');
            e.target.parentElement.classList.add('desc');

            e.target.children[0].classList.remove('fa-sort-numeric-asc');
            e.target.children[0].classList.add('fa-sort-numeric-desc');

        } else if (e.target.parentElement.classList.contains('desc')) {
            properties.sort((a, b) => {
                let da = a.price,
                    db = b.price;
                return da - db;
            });
            
            e.target.parentElement.classList.remove('desc');
            e.target.parentElement.classList.add('asc');

            e.target.children[0].classList.remove('fa-sort-numeric-desc');
            e.target.children[0].classList.add('fa-sort-numeric-asc');
        }        
    };

    return [sortByDate, sortByPrice];
}