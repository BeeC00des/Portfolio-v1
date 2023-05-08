import PropTypes from 'prop-types'
import Card from './Card'
import Navbar from './Nav'

const Skill= ({ mainText, onClick }) => {
  return (
    <>
    <div className='mainSection'>
        <div class="section1">
            <div class="section">
                <h1 className="text">{mainText}</h1>
            </div>
        </div>

        <div class="">
            <div class="skillNav">
                <Navbar navItem="Frontend Project" />
                <Navbar navItem="Technical Writing" />
            </div>
            <div className="section3">
                <Card/>
            </div>
        </div> 
    </div>
   
    </>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

Skill.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
  
}

export default Skill
