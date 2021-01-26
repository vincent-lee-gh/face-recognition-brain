import React, { Component } from 'react';
import Clarifai from 'clarifai';
import CLARIFAI_API_KEY from './apiKey';
import FaceRecognition from './components/FaceRecog/FaceRecognition'
import Header from './components/Nav/Header'
import Signin from './components/LogStatus/Signin'
import Register from './components/LogStatus/Register'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
// import styled from 'styled-components'
import './App.css';
// import Navigation from './components/Nav/Navigation';

// const contentWrapper = styled.div`
// `;


const app = new Clarifai.App({
  apiKey: CLARIFAI_API_KEY
});

const initialState = {
  input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        // password: '',
        entries: 0,
        joined: ''
      }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        // password: '',
        entries: data.entries,
        joined: data.joined
      }
    })
  }


  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      // leftCol: clarifaiFace.left_col * width ,
      // topRow: clarifaiFace.top_row * height,
      // rightCol: width - (clarifaiFace.right_col * width) ,
      // botCol: height - (clarifaiFace.bottom_row * height) ,
      top: clarifaiFace.top_row * 100,
      right: 100 - clarifaiFace.right_col * 100,
      left: clarifaiFace.left_col * 100,
      bottom: 100 - clarifaiFace.bottom_row * 100
      
    }

  }

  displayFaceBox = (box) =>{
    console.log("display box", box);
    this.setState({box: box});
  }


  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  // Clarifai.FACE_DETECT_MODEL
  // `c0c0ac362b03416da06ab3fa36fb58e3`
  // "d02b4508df58432fbb84e800597b8959"

  // this.state.input
  // https://samples.clarifai.com/face-det.jpg
  // https://world-celebs.com/public/media/resize/800x-/2019/11/15/rachel-cook-2.jpg
  // https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_1000,h_743,c_limit/best-face-oil.png

  onPictureSubmit = () => {
    // console.log('click');
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
       this.state.input )
    .then((response) => {
      if (response){
        fetch('http://localhost:4000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id,
          })
        })
        .then(response => response.json() )
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
        .catch(console.log())
      }
      console.log(response);
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);

      this.displayFaceBox(this.calculateFaceLocation(response));
    })
    .catch(err => console.log(err) );
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState(initialState)
    }else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render(){
    const { isSignedIn, imageUrl, route, box, user } = this.state;
    return (
      <div className="App">
        <div className='container'>
            <Header isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}  />
            {/* <Navigation onRouteChange={this.onRouteChange}  /> */}
          {route === 'home' 
          ? <div className='contentWrapper' >
              <Logo />     
                <div className='content'>
                  <Rank userName={user.name} userEntries={user.entries} />
                  <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onPictureSubmit={this.onPictureSubmit} />             
                    <FaceRecognition box={box}  imgUrl={imageUrl} />
                </div> 
            </div>
          :(
            route === 'register'
            ?  <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
            :  <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
           )
          
         
          }
        </div>
        
        
      </div>
    ); 
  }
}

export default App;
