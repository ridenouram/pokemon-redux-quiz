import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Paging({ currentPage }) {
  let nextPage = 0;
  let prevPage = 0;
  if(currentPage === 1) {
    nextPage = 2;
    prevPage = 1;
  }
  else if(currentPage === 81) {
    nextPage = 81;
    prevPage = 80;
  }
  else {
    nextPage = currentPage + 1;
    prevPage = currentPage - 1;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Link to={`/${prevPage}`} onClick={() => window.location.refresh()}>
        <button style={{ height: '20px' }}> Prev </button>
      </Link>
      <p>{currentPage} of 81</p>
      <Link to={`/${nextPage}`} onClick={() => window.location.refresh()}>
        <button style={{ height: '20px' }}> Next </button>
      </Link>
    </div>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired
};

export default Paging;
