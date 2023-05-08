import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
// import Button from './Button'
import Navbar from './Nav'

const Header = ({ title, onAdd}) => {
  // const location = useLocation()

  return (
    <header className='header'>
      <div className='section1'>
        <h1 >{title}</h1>
      </div>
      <div className='section2'>
        <Navbar navItem="Project" />
        <Navbar navItem="Skill" />
        <Navbar navItem="Resume" />
        <Navbar navItem="Gallery" />
      </div>
  
      {/* {location.pathname === '/' && (
        
        <Button
        color="green"
        text="Say Hello"
        onClick={onAdd}
      />
      )} */}
    </header>
  )
}

Header.defaultProps = {
  title: 'Beec00des',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;