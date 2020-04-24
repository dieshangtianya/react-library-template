import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import  './index.less';

class Button extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func
  };

  render() {
    const { children, type, className, onClick } = this.props
    return (
      <button onClick={onClick} className={classNames('button', 'default', type, className)}>
        {children}
      </button>
    )
  }
}

export default Button