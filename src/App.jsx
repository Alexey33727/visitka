import './App.scss';
import About from './sections/About/About';
import Portfolio from './sections/Portfolio/Portfolio';
import Service from './sections/Service/Service';
import StartedView from './sections/StartedView/StartedView';

function App() {
  return (
    <div className="App">
      <header>
        <a href="#" className="navlink">Home</a>
        <a href="#" className="navlink">About</a>
        <a href="#" className="navlink">Portfolio</a>
        <a href="#" className="navlink">Services</a>
        <a href="#" className="navlink">Resume</a>
        <a href="#" className="navlink">Contact</a>
        <button className='dwn'>Download CV</button>
      </header>
      <StartedView />
      <About />
      <Portfolio />
      <Service />
    </div>
  );
}

export default App;
