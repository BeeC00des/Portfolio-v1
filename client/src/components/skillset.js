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

        <div class="section4">
            <div class="skillNav">
                <Navbar navItem="Technical Skills" />
                <Navbar navItem="Soft Skills" />
            </div>
            <div className="cardSection">
              <div class="layer">
                <Card/>
                <Card/>
                <Card/>
              </div>
              <div class="layer">
                <Card/>
                <Card/>
                <Card/>
              </div>
              <div class="layer">
                <Card/>
                <Card/>
                <Card/>
              </div>
                
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
