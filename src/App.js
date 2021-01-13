import './App.css';
import Navigation from './components/Nav/Navigation'
import Logo from './components/Logo/Logo'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navigation />
        {
          <Logo />
          // <ImageLinkForm />
          // <FaceRecognition />
        }
      </div>
      
      
    </div>
  );
}

export default App;
