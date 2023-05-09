import PropTypes from 'prop-types';
import SocialBtn from './socialBtn';

const Social = ({ mainText, subText, text1, text2, img, onClick }) => {
  return (
    <>
    <div className='mainSection'>
        <div class="section1">
            <div class="section">
                <h1 className="text">{mainText}</h1>
                <p className="smallText">{subText}</p>
            </div>
        </div>

        <div class="section3">
            <div class="sectionSocial">
                <SocialBtn text="High"/>
                <SocialBtn text="High"/>
                <SocialBtn text="High"/>
                <SocialBtn text="High"/>
            </div>
        </div> 
    </div>
   
    </>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

Social.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
  
}

export default Social
