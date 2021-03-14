import React from 'react';
import _ from 'lodash'

const Pagination = (props) => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;
    const pageCount = itemsCount/pageSize;

    const pages =  _.range(1, pageCount+1)
    if (pageCount<=1) return null;

  

    return (  
    <nav>
    <ul className="pagination">
        {pages.map(page=>
                        <li className={page==currentPage ? "page-item active" : "page-item"}
                            key={page}    >
                            <a className="page-link" 
                                onClick={()=>onPageChange(page)}>{page}</a>
                        </li>
        
        )}
    </ul>
  </nav>

    );
}
 
export default Pagination;