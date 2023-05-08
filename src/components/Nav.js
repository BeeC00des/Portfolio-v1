// import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
// import Button from './Button'

const Navbar = ({ navItem}) => {
//   const location = useLocation()

  return (
    <nav className='header'>
      <h1 className="navItem">{navItem}</h1>
    </nav>
  )
}

export default Navbar;