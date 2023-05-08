import PropTypes from 'prop-types'
import Card from './Card'

const Skill= ({ mainText, onClick }) => {
  return (
    <>
    <div className='mainSection'>
        <div class="section1">
            <div class="section">
                <h1 className="text">{mainText}</h1>
            </div>
        </div>

        <div class="section3">
           <Card/>
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
