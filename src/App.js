import './App.css';
// import Home from './components/Home'
// import Homeclass from './components/Homeclass';
// import About from './components/About';
// import Aboutclass from './components/Aboutclass';
import Home1 from './components/Home1'
import About1 from './components/About1'
import Contact from './components/Contact';
import Termsandconditions from './components/Termsandconditons';
import Policy from './components/Policy';
import Privacy from './components/Privacy';
// import Aboutprop from './components/Aboutprop';
function App() {
  return (
    <div className="App">
        {/* <Home technology="React JS" />
        <Homeclass period="1 month" />
        <About company="trangile" />
        <Aboutclass training="CEPT training instituion" /> */}
        <Home1 />
        <About1 />
        {/* <Aboutprop /> */}
        <Contact />
        <Termsandconditions />
        <Policy />
        <Privacy />
        
    </div>
  );
}

export default App;
