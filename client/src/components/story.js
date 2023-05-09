import PropTypes from 'prop-types'
import Card from './Card'
import Navbar from './Nav'

const Story= ({ mainText, storyText }) => {
  return (
    <>
    <div className='mainSection'>
        <div class="section1">
            <div class="section">
                <h1 className="text">{mainText}</h1>
            </div>
        </div>

        <div class="section4">
            <div class="storyNav">
                <img/>
                <p>{storyText}</p>
            </div>
           
        </div> 
    </div>
   
    </>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

Story.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
  
}

export default Story
