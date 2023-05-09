// import logo from './logo.svg';
import './App.css';

// Route, Routes
// import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import About from './components/About';
import Skill from './components/skillset';
import Project from './components/project';
import Story from './components/story';

function App() {
  return (
    <Router>
      <div className='main'>
      <Button
        color="green"
        text="Say Hello!"
        className="bgBtn"
      />
      </div>
       
      <Header title="BeeC00des"/>
      <About  
      mainText="Hello!"  
      subText="I'm Bolarinwa Ajayi"

      text1="A creative 
      Software Developer skilled at frontend engineering  for webs service 
      crafting responsive and beautiful user interface 
      embedded with great functionalities and interact with web servers." 

      text2="
      I'm passionate about innovating software solutions and impacting my community. 
      I have three years experience working and volunteering 
      for organizations. Check my Works" />

      <Skill mainText="Skill"/>
      <Project mainText="Project" />

      <Story mainText="Experiences"/>

      <About  
      mainText="Get In Touch"  
      subText= "I'm Avaliable for collaboration" />

      <Footer footerItem="Designed & developed by Beec00des"/>
      <div class="footerList">
        <Footer footerItem="Reactjs" />
        <Footer footerItem="Github"/>
        <Footer footerItem="Git"/>
        <Footer footerItem="Netlify"/>
      </div>
    </Router>
  );
}

export default App;
