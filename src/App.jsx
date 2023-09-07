import './App.css';
import AboutUs from './components/about-us';
import Contact from './components/contact';
import Home from './components/home';
import Pricing from './components/pricing';
function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
