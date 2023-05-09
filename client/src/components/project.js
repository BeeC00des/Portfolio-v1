import PropTypes from 'prop-types'
import Card from './BigCard'
import Navbar from './Nav'
import Header from './Header'

const Project = ({ mainText, onClick }) => {
  return (
    <>
    <div className='mainSection2'>
        <Header title="Project"/>
        

        <div class="sectiond">
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

Project.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
  
}

export default Project
