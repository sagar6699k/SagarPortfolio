import './App.css';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import {SkillTool} from './SkillTool';

function App() {
  return (
    <div className="App">
      <Home />
      <SkillTool/>
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
