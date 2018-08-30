import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ onClick, goTo, numPage }) => {
  let paginationComp = [];
  for (let i = 0; i < numPage.length; i++) {
      paginationComp.push(
        <li className={goTo === (i+1) ? 'active page-item': 'page-item'} key={i+1}>
          <a className="page-link" onClick={(e) => {e.preventDefault();onClick(i+1)}}>{i+1}</a>
        </li>
      );
  }
  return paginationComp.length ? 
      (<ul className="pagination justify-content-center mt-5">{paginationComp}</ul>):'';
}

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  goTo: PropTypes.number.isRequired,
  numPage: PropTypes.array.isRequired
}

export default Pagination