import PropTypes from 'prop-types'

const About= ({ mainText, subText, text1, text2, onClick }) => {
  return (
    <>
    <div className='mainSection'>
        <div class="section1">
            <div class="section">
                <h1 className="text">{mainText}</h1>
                <p>{subText}</p>
            </div>
        </div>

        <div class="section3">
            <div class="section">
                <p className='aboutText'>{text1}</p>
                <p className='aboutText'>{text2}</p>
            </div>
        </div> 
    </div>
   
    </>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

About.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
  
}

export default About
