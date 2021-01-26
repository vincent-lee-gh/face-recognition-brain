import React from 'react'

// = ({ onRouteChange })
class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
      registerEmail: '',
      registerPassword: '',
      registerName: ''
    }
  }
  
  onNameChange = (event) => {
    this.setState({registerName: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({registerEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({registerPassword: event.target.value})
  }

  onSubmitRegister = () => {
    fetch('http://localhost:4000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.registerEmail,
        password: this.state.registerPassword,
        name: this.state.registerName
      })
    })
    .then(response => response.json())
    .then(user =>{
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');

      }
    })
    // console.log(this.state);
  }
  render() {
    // const{ onRouteChange } = this.props;
    return (
      <div>
        <article className="br5 ba  b--black-10 mv4 w-100 w-100-m w-50-l mw6 shadow-4 center">
          <main className="pa4 black-80">
            <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              {/* ttu tracked */}
                <legend className="f2 fw6 ph0 mh0  tracked">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                  <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" 
                  type="text" 
                  name="name"  
                  id="name" 
                  onChange={this.onNameChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                  onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" 
                  type="password" 
                  name="password"  
                  id="password" 
                  onChange={this.onPasswordChange}
                  />
                </div>
                {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label> */}
              </fieldset>
              <div className="">
                <input  
                  onClick={this.onSubmitRegister}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Register"
                />
              </div>
              {/* <div className="lh-copy mt3">
                <a href="#0" className="f6 link dim black db">Register</a>
                <a href="#0" className="f6 link dim black db">Forgot your password?</a>
              </div> */}
            </div>
          </main>
        </article>
      </div>
    )
  }
}

export default Register;