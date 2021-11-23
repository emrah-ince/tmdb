import React from "react";

const Pagination = (props) => {
    const pageLink = []
    let startPageNumber = 1;
    if (props.currentPage - 3 > 1) startPageNumber = props.currentPage - 3;
    let stopPageNumber = props.pages - 2;

    for (let i = 1; i < props.pages + 1; i++) {

        let active = props.currentPage == i ? 'active' : '';
        if (i < 4) {
            pageLink.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
        }
        else if (i > props.pages - 3) {
            pageLink.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
        }
        else {
            if (props.currentPage == i)
                pageLink.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
        }
    }


    // for (let i = startPageNumber; i < props.pages + 1; i++) {
    //     if (i == props.currentPage + 1) i = stopPageNumber;

    //     let active = props.currentPage == i ? 'active' : '';

    //     pageLink.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
    // }

    return (
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    {props.currentPage > 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Prev</a></li> : ''}
                    {pageLink}
                    {props.currentPage < props.pages + 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : ''}

                </ul>
            </div>
        </div>
    )
}
export default Pagination;