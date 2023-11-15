import './App.scss';
import About from './sections/About/About';
import Contacts from './sections/Contacts/Contacts';
import Portfolio from './sections/Portfolio/Portfolio';
import Resume from './sections/Resume/Resume';
import Service from './sections/Service/Service';
import StartedView from './sections/StartedView/StartedView';

function App() {
  return (
    <div className="App">
      <header>
        <p className="navlink">Home</p>
        <p className="navlink">About</p>
        <p className="navlink">Portfolio</p>
        <p className="navlink">Services</p>
        <p className="navlink">Resume</p>
        <p className="navlink">Contact</p>
        <button className='dwn'>Download CV</button>
      </header>
      <StartedView />
      <About />
      <Portfolio />
      <Service />
      <Resume />
      <Contacts />
    </div>
  );
}

export default App;
