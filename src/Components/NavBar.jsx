import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
const NavBar = () => {
  const { user, signInWithGoogle, signOut } = useContext(AuthContext);

  const isLoggedIn = () => {
    return (
      <div className="nav-login">
        <div>{user.displayName} is now rockin!</div>
        <button onClick={signOut}>Log Out</button>
      </div>
    );
  };

  const isLoggedOut = () => {
    return (
      <div className="nav-login">
        <div>Log in to get rockin!</div>
        <button onClick={signInWithGoogle}>Login</button>
      </div>
    );
  };

  return ( 
    <nav>
      <div className='header-top'>
        <div className='blue-bar x1'></div>
        <h1>There Are Four Mics</h1>
        <div className='blue-bar x3'></div>
        <div className='blue-bar x5'></div>
        <div className='orange-bar x2'></div>
        <div className='x2'></div>
        <div className='blue-bar x1'></div>
      </div>
      <div className='header-bottom'>
        <div className='orange-bar x3'></div>
        <h2 className='page-title'>Archives</h2>
        <div className='orange-bar x9'></div>
      </div>
    </nav>
  );
};

export default NavBar;
