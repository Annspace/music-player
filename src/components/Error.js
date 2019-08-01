import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Error extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { errorText } = this.props;
    return <div>{errorText}</div>;
  }
}

Error.propTypes = {
  errorText: PropTypes.any.isRequired,
};

export default Error;
