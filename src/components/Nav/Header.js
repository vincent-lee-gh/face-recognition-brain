import Navigation from './Navigation'

const Header = ({onRouteChange, isSignedIn}) => {
  return(

      
    <div>
      <nav>
        <div className='nav-L'>
          <a href='#0' >LOGO</a>
        </div>

        <div className='nav-R'>
          <Navigation isSignedIn={isSignedIn}  onRouteChange={onRouteChange}  />
        </div>
        
      </nav>
    </div> )
}

export default Header;