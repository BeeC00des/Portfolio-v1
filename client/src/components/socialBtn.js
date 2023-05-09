import PropTypes from 'prop-types'

const SocialBtn = ({ text, onClick }) => {
  return (
    <button
     
      // style={{ backgroundColor: color }}
      className='btnSocial'
    >
      {text}
    </button>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

SocialBtn.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default SocialBtn
