import React from 'react'
import PropTypes from 'prop-types'

function Button({children, isDisabled, version, type}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}
Button.defaultProps={
    type: 'button',
    version: 'primary',
    isDisabled : false,
}
Button.prototype={
    children : PropTypes.node.isRequired,
    isDisabled : PropTypes.bool,
    version: PropTypes.string,
    type : PropTypes.string
}
export default Button
