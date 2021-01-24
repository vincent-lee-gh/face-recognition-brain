

const Navigation = ({onRouteChange, isLoginedIn}) => {
    if (isLoginedIn) {
  return(
      <ul>
      <li>
        <a  
        onClick={()=> onRouteChange('logout')} 
        // className='link dim pointer ' 
        href="#0"
        >
          Sign out</a>
      </li>
    </ul>
  )} else {
    return(

      <ul>
      <li>
        <a  
        onClick={()=> onRouteChange('signin')} 
        // className='link dim pointer ' 
        href="#0"
        >
          Login</a>
      </li>
      <li>
        <a  
        onClick={()=> onRouteChange('register')} 
        // className='link dim pointer ' 
        href="#0"
        >
          Register</a>

      </li>
    </ul>
          )
  }
}

export default Navigation;