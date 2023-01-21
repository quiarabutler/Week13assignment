import './App.css';
import Navbar from './Components/navbar';
import Login from './pages/login';
import Pricing from './pages/pricing';
import Locations from './pages/locations';
import About from './pages/about';
import "/Users/cheya/Desktop/Promineo/Week-13-Intro_to_React_Webpack_Components_and_JSX/my-react-app/src/login.css";
function App() {
  let component;
  switch(window.location.pathname) {
    
    case '/Login':
      component = <Login />
      break
    case '/Pricing':
      component = <Pricing />
      break
    case '/Locations':
      component = <Locations />
      break 
    case '/About':
      component = <About />
      break;
  };
  
  return (
    <>
  <Navbar />
  <br></br>
  <div className='container'> {component} </div>
  
    </>
  )
 
  let LoginForm;

  return (
    <>
    <div className='page'>
      <LoginForm />
    </div>
    </>
  );
}
  
export default App;
