import Navigation from './Navigation'

const Header = ({onRouteChange, isLoginedIn}) => {
  return(

      
    <div>
      <nav>
        <div className='nav-L'>
          <a href='#0' >LOGO</a>
        </div>

        <div className='nav-R'>
          <Navigation isLoginedIn={isLoginedIn}  onRouteChange={onRouteChange}  />
        </div>
        
      </nav>
    </div> )
}

export default Header;