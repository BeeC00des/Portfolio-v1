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
                <Card title="Cardio" year="2021" text="Interface heart disease awareness and prediction using ml models."/>
                <Card title="Event Ticket" year="2022" text="A platform for booking music event ticket and watch live concert"/>
                <Card title="Zacrac Learning" year="2021" text="Contributed to development of an elearing platform"/>
              </div>
              <div class="layer">
                <Card title="Bitcoin Rate" year="2022" text="Interface that create,edit and delete customer record for a supermart"/>
                <Card title="Tic-tac-toe" year="2021" text="A interface for create set of X’s or 0’s vertically or horizontally"/>
                <Card title="Snake Game" year="2021" text="An interface for the old moving snake in a box swallowing balls"/>
              </div>
              <div class="layer">
                <Card title="Amine Ball movement" year="2022" text="An Interface that control ball movement on box"/>
                <Card title="Todo Track app" year="2023" text="This application keep todo logs per time"/>
                <Card title="Appointment Booking app" year="2023" text="Easy to use application for appointment schedule"/>
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
