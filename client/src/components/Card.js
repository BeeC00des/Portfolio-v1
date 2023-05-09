import PropTypes from 'prop-types'

const Card = ({ text, subtext, link }) => {
  return (
    <div className="card">
      <div className="cardContent">
        <img alt="toolLogo"/>
        <p className='aboutText'>
          {text}
        </p>
      </div> 
  </div>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

Card.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Card;
