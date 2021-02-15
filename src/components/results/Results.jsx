import React from 'react';
import PropTypes from 'prop-types';

import ReactJson from 'react-json-view';

const Results = ({ results }) => {
  return (
      <ReactJson src={results} resultsDataTypes={false} />
  );
};

Results.propTypes = {
  results: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Results;