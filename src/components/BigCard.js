import PropTypes from 'prop-types'
import Button from "./Button"

const Card = ({ text, year,title,link }) => {
  return (
    <div className="card">
      <div className="cardContent">
        <span>{year}</span>
        <p className='cardTitle'>{title}</p>
        <p className='CardText'>{text}</p>
        
        <Button />
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
