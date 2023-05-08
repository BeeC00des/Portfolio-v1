import PropTypes from 'prop-types'

const Contact = ({ text, subtext, link }) => {
  return (
   
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

Contact.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Contact
