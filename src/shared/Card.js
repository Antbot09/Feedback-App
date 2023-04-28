import Proptypes from 'prop-types'
import React from 'react'

function Card({children,reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
     {children}
    </div>
  )
}

Card.defaultProps = {
    reverse : 'fales',
}
Card.propType = {
    children: Proptypes.node.isRequired,
    reverse : Proptypes.bool
}

export default Card
